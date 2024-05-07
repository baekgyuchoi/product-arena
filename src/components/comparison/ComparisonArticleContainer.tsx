import React from 'react';
import prisma from '@/src/app/helper/db';
import OpenAI from 'openai'
import { comparison_prompt } from '@/src/app/helper/prompts';
import { ProductResult } from '@/src/lib/validators/ProductResult';
import { ProductArticle } from '@/src/lib/validators/ProductArticle';
import ComparisonArticleContent from './ComparisonArticleContent';


interface ComparisonArticleContainerProps {
    asin_1: string,
    asin_2: string,
    product_data_1: ProductResult,
    product_data_2: ProductResult
}

type Section = {
    section_title: string;
    section_content: string;
}



async function generateComparisonArticle(asinconcat: string, product_1_name: string, product_2_name: string, product_1_price: number, product_2_price: number, product_1_review: ProductArticle, product_2_review: ProductArticle) {
    console.log("generating comparison article")
    const openai = new OpenAI({
        apiKey : process.env.OPENAI_API_KEY
    });
  
    const product_1_review_summary = product_1_review.review_description

    const product_2_review_summary = product_2_review.review_description

    const user_prompt = `Product 1 name: ${product_1_name} \nProduct 1 price: ${product_1_price} \nProduct 1 review: ${product_1_review_summary} \nProduct 2 name: ${product_2_name} \nProduct 2 price: ${product_2_price} \nProduct 2 review: ${product_2_review_summary} \n\n`


    try{
        await prisma.productComparison.update({
            where: {
                asinconcat: asinconcat
            },
            data: {
                retries: {
                    increment: 1
                },
                updatedAt: new Date()

            }
        
        })
        const completion = await openai.chat.completions.create({
            model : "gpt-3.5-turbo-0125",
            max_tokens : 4096,
            messages : [
                {"role": "system", "content": comparison_prompt},
                {"role": "user", "content": user_prompt},
            ],
            response_format : {
                type : "json_object",
            },
            
            temperature : 0.7
          })
        
          return completion.choices[0].message.content
    }
    catch(err) {
        console.log(err)
        return null
    }
    
}

async function saveComparisonPage(asin_1: string, asin_2: string) {
    try{
        await prisma.productComparison.create({
            data: {
                asinconcat: asin_1 + "&" + asin_2,
                firstProductAsin: asin_1,
                secondProductAsin: asin_2,
                updatedAt: new Date()

            }
        })
    } catch(err){
        console.log(err)
    }
}

async function getComparisonArticle(asin_1: string, asin_2: string) {
    const comparison_id = asin_1 + "&" + asin_2;
    try{
        const comparison_article = await prisma.productComparison.findUnique({
            where: {
                asinconcat: comparison_id
            }
        })


        return comparison_article
    } catch(err){
        console.log(err)
        return null
    }
}

async function saveComparisonGeneration(asinconcat: string, content: string) {
    try {
        await prisma.productComparison.update({
            where: {
                asinconcat: asinconcat
            },
            data: {
                content: content,
                updatedAt: new Date()
            }
        })
        console.log("saved")
    }catch(err){
        console.log(err)
    }
}




const ComparisonArticleContainer: React.FC<ComparisonArticleContainerProps> = async (props) => {

    const comparison_article = await getComparisonArticle(props.asin_1, props.asin_2);

    if (!comparison_article) {
        await saveComparisonPage(props.asin_1, props.asin_2);
        const comparison_generation = await generateComparisonArticle(props.asin_1 + "&" + props.asin_2, props.product_data_1.name, props.product_data_2.name, props.product_data_1.price, props.product_data_2.price, props.product_data_1.article, props.product_data_2.article);
        if(comparison_generation !== null && comparison_generation !== undefined) {
            await saveComparisonGeneration(props.asin_1 + "&" + props.asin_2, comparison_generation);
        }
        return (
            <div>
                <ComparisonArticleContent comparison_content = {comparison_generation!} />
            </div>
        )
    } 
    const now = new Date();

    const updated_at = comparison_article?.updatedAt;

    const diff = now.getTime() - updated_at!.getTime();
    
    if (!comparison_article?.content) {
        if (diff > 100000) {
            const comparison_generation = await generateComparisonArticle(props.asin_1 + "&" + props.asin_2, props.product_data_1.name, props.product_data_2.name, props.product_data_1.price, props.product_data_2.price, props.product_data_1.article, props.product_data_2.article);
            if(comparison_generation !== null && comparison_generation !== undefined) {
                await saveComparisonGeneration(props.asin_1 + "&" + props.asin_2, comparison_generation);
            }
            return (
                <div>
                    <ComparisonArticleContent comparison_content = {comparison_generation!} />
                </div>
            )
        }


        return (
            <>
                
            </>
        )
        

        
    }


    return (
        <div className=''>
            <ComparisonArticleContent comparison_content = {comparison_article.content} />
        </div>  
    )


    
};

export default ComparisonArticleContainer;
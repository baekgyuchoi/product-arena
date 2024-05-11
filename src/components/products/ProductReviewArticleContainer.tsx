import React from 'react';
import prisma from '@/src/app/helper/db';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion"
  

interface ProductReviewArticleContainerProps {
    asin: string
}

type Section = {
    section_title: string;
    section_content: string;
}



async function getReviewArticle(asin: string) {
    try{
        const review_article = await prisma.productArticle.findUnique({
            where: {
                asin: asin
            }
        })

        return review_article
    }catch(err){
        console.log(err)
    }
}

const ProductReviewArticleContainer: React.FC<ProductReviewArticleContainerProps> = async (props) => {
    const review_article = await getReviewArticle(props.asin);

    if (!review_article) {
        return (
            <section>
                <h2 className="text-2xl font-bold">Product Review Analysis</h2>
                <p>No review article found for this product</p>
            </section>
        )
    }
    console.log(review_article)
 
    const first_parse_review_description_json = review_article?.review_description ? JSON.parse(review_article.review_description)  : null;
    const review_description_json = first_parse_review_description_json ? JSON.parse(first_parse_review_description_json) : null;
    const positive_reviews = review_description_json.positive_review_analysis as Section[];
    const critical_reviews = review_description_json.critical_review_analysis as Section[];
    console.log(positive_reviews)
    return (
        <section className=''>
            <h2 className="text-2xl font-bold">Product Review Analysis</h2>
            <div className="my-4">
                <Accordion type="multiple" className="w-full lg:px-8" defaultValue={["item-1","item-2"]}>
                    {(positive_reviews!==null) && (positive_reviews!==undefined) && (positive_reviews.length > 0)? (
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h3 className="text-xl font-bold">Positive Reviews</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                            {positive_reviews.map((review: {"section_title" : string, "section_content": string}, index: number) => {
                                return (
                                    <div key={index} className='py-4'>
                                        <h4 className='text-xl'>{review.section_title}</h4>
                                        <p className=''>{review.section_content}</p>
                                    </div>
                                )
                            })}
                            </AccordionContent>
                        </AccordionItem>
                    ):(
                        <></>
                    ) }
                    
                </Accordion>
                <Accordion type="single" collapsible className="w-full lg:px-8">
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <h3 className="text-xl font-bold">Critical Reviews</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                        {critical_reviews.map((review: {"section_title" : string, "section_content": string}, index: number) => {
                            return (
                                <div key={index} className='py-4'>
                                    <h4 className='text-xl'>{review.section_title}</h4>
                                    <p className=''>{review.section_content}</p>
                                </div>
                            )
                        })}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                
                
                
               
            </div>
        </section>
    );
};

export default ProductReviewArticleContainer;
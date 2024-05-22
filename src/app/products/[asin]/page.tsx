import ProductDetailsDisplay from "@/src/components/products/ProductDetailsDisplay";
import prisma from "../../helper/db";
import { ProductResult } from "@/src/lib/validators/ProductResult";
import { ProductReview } from "@/src/lib/validators/ProductReviews";
import { ProductDetail } from "@/src/lib/validators/ProductDetails";
import { Card, CardHeader } from "@/src/components/ui/card";
import ProductIntroBox from "@/src/components/products/ProductIntroBox";
import { Metadata } from "next";


export async function generateMetadata({
    params,
  }: {
    params: {asin: string};
  }): Promise<Metadata> {
    
    const product_asin = params.asin
    
    const product = await prisma.products.findUnique({
        where: {
            asin: product_asin,
            product_details: {
                isNot: null
            },
            product_rating: {
                isNot: null
            },
            article: {
                isNot: null
            }
        },
        include: {
            article: true,
        }
    })
    console.log(product?.article?.review_description)
    try{
        const json_review = JSON.parse(JSON.parse(product?.article?.review_description as string))

        let review_description = "Review analysis of " + product?.name

        if (json_review.positive_review_analysis && json_review.positive_review_analysis.length > 0 && json_review.positive_review_analysis[0].section_content) {
            review_description = json_review.positive_review_analysis[0].section_content
        }

    
        return {
                title: `Review of ${product?.name}`,
                description: `${review_description}`,
                alternates: {
                    canonical: '/products/' + product_asin 
                }
            }
    }
    catch(err){
        console.log(err)
        return {
            title: `Review of ${product?.name}`,
            description: `Review analysis of ${product?.name}`,
            alternates: {
                canonical: '/'
            }
        }
    }
    
};


export default async function ProductPage({ params }: {
    params: { asin : string };
    
    }) {
        

        const product = await prisma.products.findUnique({
            where: {
                asin: params.asin,
                product_details: {
                    isNot: null
                },
                product_rating: {
                    isNot: null
                },
                article: {
                    isNot: null
                }
            },
            include: {
                product_rating: true,
                product_details: true
            }
        })
        if (!params) return <div>loading...</div>;
        if (!product) return (
            <div>
                <meta name="robots" content="noindex" />
                <div className="h-screen flex items-center text-2xl text-gray-100  font-black justify-center ">
                    404: Product not found
                </div>
            </div>
        );

        const product_data = product as ProductResult
        return(
        <>
            <ProductDetailsDisplay product_data={product_data} />
        </>
        )
    }
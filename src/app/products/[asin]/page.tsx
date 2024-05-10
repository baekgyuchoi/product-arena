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
            asin: product_asin
        },
        include: {
            article: true,
        }
    })

    const json_review = JSON.parse(product?.article?.review_description as string)
    console.log(json_review)
    return {
      title: `Review of ${product?.name}`,
      description: `${json_review.positive_review_analysis[0].section_content}`,
      alternates: {
        canonical: '/'
      }
    }
};


export default async function ProductPage({ params, searchParams }: {
    params: { asin : string };
    searchParams?: { [key: string]: string | null};
    
    }) {
        const categorySlug = searchParams?.category;

        const product = await prisma.products.findUnique({
            where: {
                asin: params.asin
            },
            include: {
                product_rating: true,
                product_details: true
            }
        })
        if (!params) return <div>loading...</div>;
        

        const product_data = product as ProductResult
        return(
        <>
            <ProductDetailsDisplay product_data={product_data} categorySlug={categorySlug!}/>
        </>
        )
    }
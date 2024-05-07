import ProductDetailsDisplay from "@/src/components/products/ProductDetailsDisplay";
import prisma from "../../helper/db";
import { ProductResult } from "@/src/lib/validators/ProductResult";
import { ProductReview } from "@/src/lib/validators/ProductReviews";
import { ProductDetail } from "@/src/lib/validators/ProductDetails";
import { Card, CardHeader } from "@/src/components/ui/card";
import ProductIntroBox from "@/src/components/products/ProductIntroBox";


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
import ComparisonDetailsDisplay from "@/src/components/comparison/ComparisonDetailsDisplay";
import prisma from "../helper/db";
import { ProductResult } from "@/src/lib/validators/ProductResult";
import { Card } from "@/src/components/ui/card";

async function getProductData(asin: string) {
    const product = await prisma.products.findUnique({
        where: {
            asin: asin
        },
        include: {
            product_details: true,
            product_rating: true,
            article: true
        }
    })
    return product as ProductResult

}

export default async function ProductComparisonPage({ searchParams }: {
    searchParams?: { [key: string]: string | null};
    
    }) {
    
        const asin_1 = searchParams?.p_a;
        const asin_2 = searchParams?.p_b;

        const product_data_1 = await getProductData(asin_1 as string);
        const product_data_2 = await getProductData(asin_2 as string);

        

        if (!product_data_1 || !product_data_2) {
            return (
                <>
                    <div className='mt-32 flex flex-col items-center md:px-4 py-8'>
                        <div className='flex w-full flex-1 flex-col items-center pl-0 pr-0 '>
                            <Card className=" text-black h-72  sm:w-3/4 w-full mb-0.5 flex-1 rounded-t-3xl from-primary to-primary/80 shadow-xl border-blue-800 border-2  sm:mb-8 sm:flex-initial sm:rounded-b-3xl flex items-center justify-center">
                            <h1>Products not found</h1>
                            </Card>
                        </div>
                    </div>
                </>
            )
        
        }

        return(
        <>
            <ComparisonDetailsDisplay product_data_1={product_data_1} product_data_2={product_data_2}/>
        </>
        )
    }
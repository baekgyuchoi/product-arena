import React from 'react';
import prisma from '@/src/app/helper/db';
import { Card } from '../ui/card';
import ProductRating from './ProductRating';
import Link from 'next/link';
import ProductGridCard from '../categories/ProductGridCard';
import { ProductResult } from '@/src/lib/validators/ProductResult';


interface RelatedProductsBoxProps {
    related_products: string[],
    category_slug: string
}

async function getRelatedProducts(asin_list: string[]) {
    const products = await prisma.products.findMany({
        where: {
            asin: {
                in: asin_list
            }
        },
        include: {
            product_details: true,
            product_rating: true,
            article: true
        }
    })
    return products
}

const RelatedProductsBox: React.FC<RelatedProductsBoxProps> = async (props) => {
    
    const asin_list = props.related_products;
    const related_products = await getRelatedProducts(asin_list);
    if(related_products.length > 0){
        return (
            <div className="my-4 gap-2 lg:px-8 w-full">
                <h3 className='text-2xl font-bold mb-4'> Related Products </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 mt-4 p-4'>
                {related_products.map((product, index) => {
                    return(
                        
                        <Link href={'/products/' + product.asin} key={index}>
                            <ProductGridCard product={product as ProductResult} />
                        </Link>
                       
                    )
                })}
                </div>
            </div>
        );
    }
    return null;
};

export default RelatedProductsBox;
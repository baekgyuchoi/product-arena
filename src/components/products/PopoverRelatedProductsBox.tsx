import React from 'react';
import prisma from '@/src/app/helper/db';
import { Card } from '../ui/card';
import ProductRating from './ProductRating';
import Link from 'next/link';
import { ScrollArea } from "../../components/ui/scroll-area"


interface PopoverRelatedProductsBoxProps {
    related_products: string[];
    product_asin: string;
}

async function getRelatedProducts(asin_list: string[]) {
    const products = await prisma.products.findMany({
        where: {
            asin: {
                in: asin_list
            },
            product_details: {
                isNot: null
            },
            product_rating: {
                isNot: null
            },
            article: {
                isNot: null
            }
        }
    })
    return products
}

const PopoverRelatedProductsBox: React.FC<PopoverRelatedProductsBoxProps> = async (props) => {
    
    const asin_list = props.related_products;
    const related_products = await getRelatedProducts(asin_list);
    
    return (
        <div className=" w-full">
            <input type="text" placeholder="Search..."  className='w-full px-2 border rounded-md mb-2'/>
            <ScrollArea className='w-full h-96'>
                <div className='grid grid-cols-1 '>
                {related_products.map((product, index) => {
                    let asin_list = [props.product_asin, product.asin]
                    asin_list.sort()
                    return (
                        <Card key={index} className="my-2 p-4">
                            <Link href={'/comparisons?p_a=' + asin_list[0] + "&p_b=" + asin_list[1]}>
                                <div className="flex flex-col items-center">
                                    <img src={product.imageURL!} alt={product.name} className="object-cover  h-32" />
                                    <h3 className="text-lg text-center">{product.name.split(" ").slice(0, 3).join(" ") + "..."}</h3>
                                    <ProductRating rating={product.rating} ratings_total={product.ratings_total} />
                                </div>
                            </Link>
                        </Card>
                    )
                })}
                </div>
            </ScrollArea>
        </div>
    );
};

export default PopoverRelatedProductsBox;
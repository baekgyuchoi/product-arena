import React from 'react';
import { ProductResult } from '@/src/lib/validators/ProductResult';
import Link from 'next/link';
import { Card } from '../ui/card';
import ProductRating from '../products/ProductRating';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../components/ui/popover"
import ProductBuyButton from '../products/ProductBuyButton';

interface ProductGridCardProps {
    product: ProductResult;
}

const ProductGridCard: React.FC<ProductGridCardProps> = (props) => {
    const { product } = props;
  
  

    return (
       

        <Card className="my-2 p-4">
            <h3 className="text-lg font-bold text-blue-800">{product.product_details?.brand}</h3>
            <div className="flex flex-col items-center">
                <img src={product.imageURL!} alt={product.name} className=" w-36 h-36 object-contain"/>
                <h3 className="text-lg text-center italic">{product.name.slice(0,50) + "..."}</h3>
                
                <ProductRating  rating={product.rating} ratings_total={product.ratings_total} />
                <ProductBuyButton aff_link={product.aff_link} price={product.price} />
            </div>
        </Card>

           
    )
}
export default ProductGridCard;;
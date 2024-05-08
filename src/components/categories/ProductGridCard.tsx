import React from 'react';
import { ProductResult } from '@/src/lib/validators/ProductResult';

import { Card } from '../ui/card';
import ProductRating from '../products/ProductRating';

import ProductBuyButton from '../products/ProductBuyButton';

interface ProductGridCardProps {
    product: ProductResult;
}

const ProductGridCard: React.FC<ProductGridCardProps> = (props) => {
    const { product } = props;
  
  

    return (
        <Card className=" h-[370px] p-4">
            <h3 className="text-lg font-bold text-blue-800">{product.product_details?.brand || "\u00A0"}</h3>
            <div className="flex flex-col items-center">
                <img src={product.imageURL!} alt={product.name} className=" w-36 h-36 object-contain"/>
                <h3 className="text-lg text-center italic">{product.name.slice(0,45) + "..."}</h3>
                
                <ProductRating  rating={product.rating} ratings_total={product.ratings_total} />
                <ProductBuyButton aff_link={product.aff_link} price={product.price} />
            </div>
        </Card>
    )
}
export default ProductGridCard;;
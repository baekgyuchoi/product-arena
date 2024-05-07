'use client';
import React from 'react';



export interface ProductBuyButtonProps {
    aff_link: string;
    price: number;
}

const ProductBuyButton: React.FC<ProductBuyButtonProps> = ({ aff_link, price }) => {

    let price_str = price.toString()
    if (price === 0) {
        price_str = 'N/A'
    }
    return (
        <>
            <div className='flex items-center justify-center z-10' onClick={(e) => {
                e.preventDefault();
                window.open(aff_link);

                }}>
                <div className='flex items-center justify-center  border-2  border-blue-800 bg-white text-blue-800 font-bold pr-8 pl-4 rounded-full shadow-md hover:bg-blue-200 animate-pulse'>
                    <img src='/Amazon_icon.png' alt='Product Image' className='mr-2 w-12 h-12' />
                    <span className='text-2xl font-bold text-blue-800 mt-1'>${price_str}</span>
                </div>
                
            </div>
        </>
    )
};

export default ProductBuyButton;
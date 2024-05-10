import React from 'react';
import { Skeleton } from '../ui/skeleton';
import Image from 'next/image';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../components/ui/popover"
import PopoverRelatedProductsBox from './PopoverRelatedProductsBox';
  

interface ProductVersusIconProps {
   related_products: string[];
   asin: string;
}

const ProductVersusIcon: React.FC<ProductVersusIconProps> = (props) => {
    
    return (
        <div className='w-full flex justify-between '>
            <div className='flex items-center justify-center '>
                <Image src="/VS_icon.png" alt="Versus Icon" width={250} height={250} className='w-20 h-20' />
            </div>
            <div className='w-2/3 flex flex-col items-center justify-center'>
                <Popover>
                    <PopoverTrigger>    
                        <div className="flex flex-col space-y-3 items-center justify-center ">
                            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent collisionPadding={ {top: 5} }>
                        <PopoverRelatedProductsBox related_products={props.related_products} product_asin={props.asin} />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default ProductVersusIcon;
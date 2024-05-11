import React from 'react';
import CirclePlus, { CopyPlus, LucideMessageSquarePlus }  from 'lucide-react'
import { Skeleton } from '../ui/skeleton';
import Image from 'next/image';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../components/ui/popover"
import PopoverRelatedProductsBox from './PopoverRelatedProductsBox';
import SearchInput from '../search/SearchInput';
import ProductComparisonSearchBar from '../search/ProductComparisonSearchBar';
  

interface ProductVersusIconProps {
   related_products: string[];
   asin: string;
   category_id: number;
}

const ProductVersusIcon: React.FC<ProductVersusIconProps> = (props) => {
    
    return (

        <div className='relative w-full flex flex-col justify-between  '>
            <div className='flex items-center justify-center '>
                <Image src="/VS_icon.png" alt="Versus Icon" width={250} height={250} className='w-20 h-20' />
            </div>
            <div className='w-full  flex flex-col items-center justify-center'>
                <div className='w-full lg:w-1/2'>
                    <ProductComparisonSearchBar productAsin={props.asin} categoryId={props.category_id} />
                </div>
               
                {/* <Popover>
                    <PopoverTrigger>    
                        <div className="relative w-[250px] flex flex-col space-y-3 items-center justify-center ">
                            <div className='absolute text-gray-700 animate-pulse flex flex-col items-center justify-center text-center top-1/2 left-3/5 z-10 '>
                                <span></span>
                                <CopyPlus className=' font-bold' size={24} />
                                <span className='italic font-medium'>Click here to compare!</span>
                            </div>
                            <Skeleton className=" h-[125px] w-[250px] rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent  collisionPadding={ {top: 5} }>
                        <PopoverRelatedProductsBox related_products={props.related_products} product_asin={props.asin} />
                    </PopoverContent>
                </Popover> */}
            </div>
        </div>
    );
};

export default ProductVersusIcon;
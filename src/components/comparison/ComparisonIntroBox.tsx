import React from 'react';
import Image from 'next/image';
import ProductRating from '../products/ProductRating';
import { Separator } from '../ui/separator';
import ProductNamePopover from '../products/ProductNamePopover';
import ProductBuyButton from '../products/ProductBuyButton';
import Link from 'next/link';



interface ComparisonIntroBoxProps {
    asin_1: string;
    brand_1: string | undefined;
    name_1: string;
    rating_1: number;
    ratings_total_1: number;
    base_image_1: string;
    aff_link_1: string;
    price_1: number;
    asin_2: string;
    brand_2: string | undefined;
    name_2: string;
    rating_2: number;
    ratings_total_2: number;
    base_image_2: string;
    aff_link_2: string;
    price_2: number;

}

const ComparisonIntroBox: React.FC<ComparisonIntroBoxProps> = (props) => {
    
    return (
        <>
        <div className='flex flex-col'>
            <h1 className='hidden'>{props.name_1 + " vs " + props.name_2 + " Reviews Summarized"}</h1>
            <div className='w-full flex flex-col lg:flex-row justify-between items center'>
                <Link href={'/products/' + props.asin_1} className="my-4 flex-1 text-center ">
                    <div className='flex items-center justify-center flex-1'>
                        <Image
                            src={props.base_image_1}
                            alt={props.name_1}
                            width={250}
                            height={250}
                            className='w-36 h-36 object-contain'
                        />
                    </div>
                    <div className=''>
                        <span className="text-2xl text-blue-800 font-bold mb-2">{props.brand_1 || ""} </span>
                    </div>
                    <ProductNamePopover product_name={props.name_1} />
                    <div className='flex items-center justify-center' >
                        <ProductRating rating={props.rating_1} ratings_total={props.ratings_total_1}  />
                    </div>
                    <div className='flex items-center justify-center'>
                        <ProductBuyButton aff_link={props.aff_link_1} price={props.price_1} />
                    </div>
                </Link>
                <div className='mx-1 flex items-center justify-center'>
                    <Image
                        src="/VS_icon.png"
                        alt="versus icon"
                        width={50}
                        height={50}
                        className='w-12 h-12 mt-1'
                    />
                </div>
                <Link href={'/products/' + props.asin_2} className="my-4  flex-1 text-center ">
                    <div className='flex items-center justify-center flex-1 '>
                        <Image
                            src={props.base_image_2}
                            alt={props.name_2}
                            width={250}
                            height={250}
                            className='w-36 h-36 object-contain'
                        />
                    </div>
                    <span className="text-2xl text-blue-800 font-bold mb-2">{props.brand_2 || ""} </span>
                    <ProductNamePopover product_name={props.name_2} />
                    <div className='flex items-center justify-center'>
                        <ProductRating rating={props.rating_2} ratings_total={props.ratings_total_2} />
                    </div>
                    <div className='flex items-center justify-center'>
                        <ProductBuyButton aff_link={props.aff_link_2} price={props.price_2} />
                    </div>
                </Link>
            </div>
            <Separator className='mt-12'/>
        </div>
        
        </>

    );
};

export default ComparisonIntroBox;
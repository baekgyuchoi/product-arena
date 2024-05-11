'use client'
import { ProductResult } from '@/src/lib/validators/ProductResult';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SearchItemButton from './SearchItemButton';
import Link from 'next/link';


interface ProductComparisonSearchBarProps {
    // Add any props you need for your component here
    categoryId: number;
    productAsin: string;
}

const ProductComparisonSearchBar: React.FC<ProductComparisonSearchBarProps> = (props) => {
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    // const [categoryId, setCategoryId] = useState<number>(0);
    const [productInfoArray, setProductInfoArray] = useState<ProductResult[] | null>(null);
    const router = useRouter();


    
    const submitSearch = (searchQuery: string | null| undefined) => {
        if (typeof searchQuery !== "string") {
            return
        }
        setSearchQuery(null)
        router.push(`/search?q=${searchQuery}`);
    }
    
    const fetchData =  async () => {
   
        const response = await fetch(`/api/search_product?q=${searchQuery}&cat=${props.categoryId}`,{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const data = await response.json()
      
        setProductInfoArray(data.productArray)
    }
    
    useEffect(() => {
        if (typeof searchQuery !== "string") {
            return
        }
        if (searchQuery.length > 0) {
            fetchData();
        }
    }, [searchQuery]);
    
    
    return (
        <div className="flex flex-col justify-center w-full rounded p-2 transition ">
            <div className=" w-full ">
                <input
                value={searchQuery || ""}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={(event) => {if (event.key === 'Enter') {submitSearch(searchQuery)}}    }
                className="w-full mx-auto px-5 lg:px-12 py-2 sm:px-5 sm:py-3 flex-1 border-gray-300 text-black bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 placeholder:text-xs md:placeholder:text-sm rounded-full justify-center placeholder:text-black-400"
                placeholder="Search a product within this category..."
                />
                <div 
                className="bg-transparent"
                onMouseDown={(e) => e.preventDefault()}
                >
                {searchQuery === null || searchQuery?.length === 0 || !isFocused? (
                    <></>
                    ):(
                    <div className="absolute left-0 mt-1 w-full lg:px-36 p-2 max-h-[600px] overflow-y-auto z-20 ">
                        <ul className='bg-gradient-to-br from-gray-200 to-blue-800/50'>
                        {productInfoArray?.map((productInfo,index) => {
                            console.log(productInfo)
                            return(
                            <li key={index}>
                            {/* <PreviewSearchItemButton songInfo={songInfo} key={index}/> */}
                                <Link href={'/comparisons?p_a='+props.productAsin + '&p_b=' + productInfo.asin}>
                                <div className='lg:px-2 py-1 bg-transparent w-full text-black z-20  hover:text-blue-800'>
                                    <SearchItemButton product_data={productInfo} />
                                </div>
                                </Link>
                            </li>
                            )
                            
                        }
                        )}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
            
        </div>
    );
};

export default ProductComparisonSearchBar;
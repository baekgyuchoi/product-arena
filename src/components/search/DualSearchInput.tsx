'use client'
import { ProductResult } from '@/src/lib/validators/ProductResult';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import ProductGridCard from '../categories/ProductGridCard';
import { Trash2 } from 'lucide-react';

interface DualSearchInputProps {
    // Add any props you need for your component here
    categoryId: number;
    product_1: ProductResult | null;
    product_2: ProductResult | null;
    setProduct_1_Data: React.Dispatch<React.SetStateAction<ProductResult | null>>;
    setProduct_2_Data: React.Dispatch<React.SetStateAction<ProductResult | null>>;
}

const DualSearchInput: React.FC<DualSearchInputProps> = (props) => {
    const [searchQuery_1, setSearchQuery_1] = useState<string | null>(null);
    const [searchQuery_2, setSearchQuery_2] = useState<string | null>(null);
    const [isFocused_1, setIsFocused_1] = useState<boolean>(false);
    const [isFocused_2, setIsFocused_2] = useState<boolean>(false);
    const [productInfoArray_1, setProductInfoArray_1] = useState<ProductResult[] | null>(null);
    const [productInfoArray_2, setProductInfoArray_2] = useState<ProductResult[] | null>(null);
    const router = useRouter();
    
    function deleteButtonClick(product_number: number) {
        if (product_number === 1) {
            props.setProduct_1_Data(null)
            setSearchQuery_1(null)
        }
        else {
            props.setProduct_2_Data(null)
            setSearchQuery_2(null)
        }
    }
    
    const submitSearch = () => {
        const asin_arr = [props.product_1?.asin, props.product_2?.asin]
        const sorted_asin_arr = asin_arr.sort()
        router.push(`/comparisons?p_a=${sorted_asin_arr[0]}&p_b=${sorted_asin_arr[1]}`);
    }
    
    const fetchData =  async (searchQuery: string, product_number: number) => {
        
        const response = await fetch(`/api/search_product?q=${searchQuery}&cat=${props.categoryId}`,{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const data = await response.json()
        console.log(data)
        if (product_number === 1) {
            setProductInfoArray_1(data.productArray)
        }
        else {
            setProductInfoArray_2(data.productArray)
        }
       
    }
    
    useEffect(() => {
        if (typeof searchQuery_1 !== "string") {
            return
        }
        if (searchQuery_1.length > 0) {
            fetchData(searchQuery_1, 1);
        }
    }, [searchQuery_1]);
    useEffect(() => {
        if (typeof searchQuery_2 !== "string") {
            return
        }
        if (searchQuery_2.length > 0) {
            fetchData(searchQuery_2, 2);
        }
    }, [searchQuery_2]);
    
    
    return (
        
        <div className="flex flex-col lg:flex-row justify-between w-full rounded gap-2 py-2 lg:px-8 transition ">
            <div className="flex flex-col items-center relative w-full">
                {(props.product_1 !== null) ? (
                    <div className='mx-2 lg:mx-0 my-2 relative'>
                        <ProductGridCard product={props.product_1} />
                        <button onClick={() => deleteButtonClick(1)} className='absolute top-3 right-3 text-black z-20'>
                            <Trash2 />
                        </button>
                    </div>
                ):(
                    
                    <div className="flex flex-col my-2 space-y-3 items-center w-full h-[370px] justify-center ">
                        <Skeleton className="h-[175px] w-[350px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-6 w-[350px]" />
                            <Skeleton className="h-6 w-[300px]" />
                            <Skeleton className="h-4 w-[300px]" />
                            <Skeleton className="h-4 w-[300px]" />
                        </div>
                    </div>
                
                )}
               
                <input
                value={searchQuery_1 || ""}
                onFocus={() => setIsFocused_1(true)}
                onBlur={() => setIsFocused_1(false)}
                onChange={(event) => setSearchQuery_1(event.target.value)}
                
                className="w-4/5 lg:w-full px-5 py-1 sm:px-5 sm:py-3 flex-1 border-gray-300 text-black bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 placeholder:text-xs md:placeholder:text-sm rounded-xl justify-center placeholder:text-black-400"
                placeholder="Search a product within this category..."
                />
                <div 
                className="bg-transparent relative w-full"
                onMouseDown={(e) => e.preventDefault()}
                >
                {searchQuery_1 === null || searchQuery_1?.length === 0 || !isFocused_1? (
                    <></>
                    ):(
                    <div className="absolute top-0 mt-1 w-screen lg:w-full p-2 max-h-96 overflow-y-auto z-20">
                        <ul>
                        {productInfoArray_1?.map((productInfo,index) => {
                            console.log(productInfo)
                            return(
                            <li key={index}>
                            {/* <PreviewSearchItemButton songInfo={songInfo} key={index}/> */}
                                
                                <button 
                                    className='p-4 bg-gray-200 w-full text-black z-20 truncate hover:text-blue-800'
                                    onClick={() => {props.setProduct_1_Data(productInfo)}}
                                    >
                                    {productInfo.name + "..."}
                                </button>
                            </li>
                            )
                            
                        }
                        )}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
            <div className='mt-8 lg:mt-0 flex items-center justify-center'>
                <button
                    className="bg-gray-200 text-black p-4 rounded-xl"
                    disabled={props.product_1 === null || props.product_2 === null}
                    onClick={() => {submitSearch()}}
                >
                    Compare
                </button>
            </div>
            <div className="flex flex-col items-center relative w-full">
                <div className='h-fit'>
                    {(props.product_2 !== null) ? (
                        <div className='mx-2 lg:mx-0 my-2 relative'>
                            <ProductGridCard product={props.product_2} />
                            <button onClick={()=>deleteButtonClick(2)} className='absolute top-3 right-3 text-black z-20'>
                                <Trash2 />
                            </button>
                        </div>
                    ):(
                        <div className="flex my-2 flex-col space-y-3 items-center w-full h-[370px] justify-center ">
                            <Skeleton className="h-[175px] w-[350px] rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-6 w-[350px]" />
                                <Skeleton className="h-6 w-[300px]" />
                                <Skeleton className="h-4 w-[300px]" />
                                <Skeleton className="h-4 w-[300px]" />
                            </div>
                        </div>  
                    )}
                </div>
                <input
                value={searchQuery_2 || ""}
                onFocus={() => setIsFocused_2(true)}
                onBlur={() => setIsFocused_2(false)}
                onChange={(event) => setSearchQuery_2(event.target.value)}
                
                className="w-4/5 lg:w-full px-5 py-1 sm:px-5 sm:py-3 flex-1 border-gray-300 text-black bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 placeholder:text-xs md:placeholder:text-sm rounded-xl justify-center placeholder:text-black-400"
                placeholder="Search a product within this category..."
                />
                <div 
                className="bg-transparent relative w-full"
                onMouseDown={(e) => e.preventDefault()}
                >
                {searchQuery_2 === null || searchQuery_2?.length === 0 || !isFocused_2? (
                    <></>
                    ):(
                    <div className="absolute mt-1 w-full p-2 max-h-96 overflow-y-auto z-20">
                        <ul>
                        {productInfoArray_2?.map((productInfo,index) => {
                            console.log(productInfo)
                            return(
                            <li key={index}>
                            {/* <PreviewSearchItemButton songInfo={songInfo} key={index}/> */}
                                
                                <button 
                                    className='p-4 bg-gray-200 w-full text-black z-20 truncate hover:text-blue-800'
                                    onClick={() => {props.setProduct_2_Data(productInfo)}}
                                >
                                    {productInfo.name + "..."}
                                </button>
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

export default DualSearchInput;
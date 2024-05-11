"use client";


import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

import { Loader2 } from "lucide-react";
import SearchItemButton from "../search/SearchItemButton";
import { set } from "zod";
import { ProductResult } from "@/src/lib/validators/ProductResult";
import Link from "next/link";

type improvedSearchResults = {
  title: string;
  pageid: number;
  snippet: string;
}

const NavBarSearchInput = () => {
 
  const [searchQuery, setSearchQuery] = useState<string | null>("");
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string | null>("");
  const [productInfoArray, setProductInfoArray] = useState<ProductResult[] | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isMouseOnPreview, setIsMouseOnPreview] = useState<boolean>(false);
  const [isSearchSubmitted, setSearchSubmitted] = useState<boolean>(false);
  const submitSearch = (inputString: string | null) => {
      
      if (typeof inputString !== "string") {
          return
      }
      setSearchSubmitted(true);
      router.push(`/search?q=${inputString}`);
  }
  // Debounce function
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }, []);

  // Update search query with a debounce

  const fetchData =  async () => {
        
    const response = await fetch(`/api/search_product?q=${searchQuery}`,{
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const data = await response.json()
    console.log(data)
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
    <div className="flex flex-col justify-center w-full rounded p-2 transition">
      <div className="relative w-full">
        <input
            value={searchQuery || ""}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={(event) => {if (event.key === 'Enter') {submitSearch(searchQuery)}}    }
            className="w-full mx-auto px-5  py-2 sm:px-5 sm:py-3 flex-1 border-gray-300 text-black bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 placeholder:text-xs md:placeholder:text-sm rounded-full justify-center placeholder:text-black-400"
            placeholder="Search a product within this category..."
            />
            <div 
            className="bg-transparent relative w-full"
            onMouseDown={(e) => e.preventDefault()}
            >
            {searchQuery === null || searchQuery?.length === 0 || !isFocused? (
                <></>
                ):(
                <div className="absolute mt-1 w-full p-2 max-h-96 overflow-y-auto z-20 bg-gradient-to-br from-gray-200 to-blue-800/50">
                    <ul>
                    {productInfoArray?.map((productInfo,index) => {
                        console.log(productInfo)
                        return(
                        <li key={index}>
                        {/* <PreviewSearchItemButton songInfo={songInfo} key={index}/> */}
                            
                            <Link 
                                className='px-2 py-1  w-full text-black z-20  hover:text-blue-800'
                                href={'/products/' + productInfo.asin}
                            >
                                <SearchItemButton product_data={productInfo} />
                            
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

export default NavBarSearchInput;
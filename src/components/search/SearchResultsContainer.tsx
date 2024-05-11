'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { ProductTag } from "@/src/lib/validators/ProductTag";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../ui/pagination"
import { ProductResult } from '@/src/lib/validators/ProductResult';
import SearchResultsGrid from './SearchResultsGrid';

interface SearchResultsContainerProps {
    search_query: string;
   
}

const SearchResultsContainer: React.FC<SearchResultsContainerProps> = ({ search_query }) => {
    // State to keep track of the selected tag

    const [productInfoArray, setProductInfoArray] = useState([]);
    const [page_number, setPageNumber] = useState(1);
    const [max_page_number, setMaxPageNumber] = useState(1);
    

    
    useEffect(() => {
        fetchData();
    }, [page_number]);
    // Function to handle clicking on a tag
  

    const fetchData =  async () => {
        const response = await fetch(`/api/get_products_from_tag?search=${search_query }&page_number=${page_number}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json()
   
        setProductInfoArray(data.productArray)
        setMaxPageNumber(Math.ceil(data.count/12))
      }



    return (
        <>
           
            
            {productInfoArray && (
                <Suspense fallback={<div>Loading...</div>}>
                    <SearchResultsGrid productArray={productInfoArray} />
                </Suspense>
            )}
            <div className="my-4">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious href="#" onClick={() => {if(page_number > 0) {setPageNumber(page_number-1)}}} />
                    </PaginationItem>
                    {[...Array(max_page_number)].map((page_,page) => {
                       
                        if(page < 1) {
                            return
                        }
                        if(page_number < 4) {
                            if (page === page_number) {
                                return (
                                    <PaginationItem key={page} className='border-gray-200 border rounded-lg'>
                                        <PaginationLink onClick={() => setPageNumber(page)}>{page}</PaginationLink>
                                    </PaginationItem>
                                )
                            }
                            if (page > 5) {
                                return
                            }
                            return (
                                <PaginationItem key={page}>
                                    <PaginationLink onClick={() => setPageNumber(page)}>{page}</PaginationLink>
                                </PaginationItem>
                            )
                        }
                        if(page_number > max_page_number - 3) {
                            if (page === page_number) {
                                return (
                                    <PaginationItem key={page} className='border-gray-200 border rounded-lg'>
                                        <PaginationLink onClick={() => setPageNumber(page)}>{page}</PaginationLink>
                                    </PaginationItem>
                                )
                            }
                            if (page < max_page_number - 5) {
                                return
                            }
                            return (
                                <PaginationItem key={page}>
                                    <PaginationLink onClick={() => setPageNumber(page)}>{page}</PaginationLink>
                                </PaginationItem>
                            )
                        }
                        else{
                            if (page === page_number) {
                                return (
                                    <PaginationItem key={page} className='border-gray-200 border rounded-lg'>
                                        <PaginationLink onClick={() => setPageNumber(page)}>{page}</PaginationLink>
                                    </PaginationItem>
                                )
                            }
                            if (page < page_number - 2 || page > page_number + 2) {
                                return
                            }
                            return (
                                <PaginationItem key={page}>
                                    <PaginationLink onClick={() => setPageNumber(page)}>{page}</PaginationLink>
                                </PaginationItem>
                            )
                        
                        }
                    }
                    )}
                    <PaginationItem>
                    {page_number < max_page_number - 3 ? (<PaginationEllipsis />):(<></>)}
                    
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationNext onClick={() => {if (page_number < max_page_number) {setPageNumber(page_number+1)}}} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
        </>
    );
};

export default SearchResultsContainer;

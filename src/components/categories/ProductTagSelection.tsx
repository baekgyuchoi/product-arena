'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { ProductTag } from "@/src/lib/validators/ProductTag";
import ProductGridContainer from "./ProductGridContainer";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../ui/pagination"

interface ProductTagSelectionProps {
    tags_list: ProductTag[];
    default_tag?: ProductTag;
    category_slug: string;
}

const ProductTagSelection: React.FC<ProductTagSelectionProps> = ({ tags_list, default_tag, category_slug }) => {
    // State to keep track of the selected tag
    const [selectedTag, setSelectedTag] = useState<ProductTag | null>(default_tag ||tags_list[0] || null);
    const [productInfoArray, setProductInfoArray] = useState([]);
    const [page_number, setPageNumber] = useState(1);
    const [max_page_number, setMaxPageNumber] = useState(1);

    
    useEffect(() => {
        fetchData();
    }, [selectedTag, page_number]);
    // Function to handle clicking on a tag
    const handleTagClick = (tag: ProductTag) => {
        setSelectedTag(tag);
    };

    const fetchData =  async () => {
        const response = await fetch(`/api/get_products_from_tag?tag_slug=${selectedTag?.slug}&page_number=${page_number}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json()
   
        setProductInfoArray(data.productArray)
        setMaxPageNumber(Math.ceil(data.count/20))
      }



    return (
        <>
            <div className="flex flex-wrap justify-center gap-2">
                {tags_list.map(tag => (
                    <span
                        key={tag.id}
                        className={`bg-blue-500 text-white px-4 py-2 rounded-full text-sm shadow cursor-pointer ${selectedTag?.id === tag.id ? 'bg-blue-700' : ''}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag.name}
                    </span>
                ))}
            </div>
            
            {productInfoArray && (
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductGridContainer productArray={productInfoArray} selectedTag={selectedTag!} categorySlug={category_slug} />
                </Suspense>
            )}
            <div className="my-4">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious href="#" />
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

export default ProductTagSelection;

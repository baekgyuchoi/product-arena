"use client"
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"


interface SearchCategorySelectProps {
  // Define your props here
  categorySlug: string | null;
  setCategorySlug: React.Dispatch<React.SetStateAction<string|null>>;
  categories: {name: string, slug: string, categoryId: number}[];
  categoryId: number | null;
  setCategoryId: React.Dispatch<React.SetStateAction<number|null>>;
}





const SearchCategorySelect:React.FC<SearchCategorySelectProps> = (props) => {
    const {categories, categoryId, setCategoryId} = props;
    const category_list = [
        {label: "Electronics", categories: categories},
        {label: "Home Improvement", categories: [
        {name: "couches", slug: "couches", categoryId: 4},
        ]},
    ]

  
    console.log("category: " + categoryId)
    return (
        <>
        <Select onValueChange={(value)=>setCategoryId(parseInt(value))}>
            <SelectTrigger className='w-[280px]'>
            <SelectValue placeholder="Select a category to search in" />
            </SelectTrigger>
            <SelectContent className=''>
         
                {categories.map((category) => (
                    <SelectItem value={category.categoryId.toString()} key={category.categoryId} >{category.name}</SelectItem>
                ))}
                
            </SelectContent>
        </Select>
        </>
    )
}

export default SearchCategorySelect
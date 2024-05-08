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
import SearchCategorySelect from './SearchCategorySelect';
import DualSearchInput from './DualSearchInput';
import { ProductResult } from '@/src/lib/validators/ProductResult';


interface SearchContainerProps {
  // Define your props here
  categories: {name: string, slug: string, categoryId: number}[];
}





const SearchContainer:React.FC<SearchContainerProps> = (props) => {
  const [categoryId, setCategoryId] = useState<number|null>(null); 
  const [productA, setProductA] = useState<ProductResult|null>(null);
  const [productB, setProductB] = useState<ProductResult|null>(null);
  const categories = props.categories;

  
  console.log("category: " + categoryId)
  return (
    <div className='mt-40 flex flex-col lg:flex-row lg:ml-8 lg:mb-48 items-center justify-center w-full'>
      <SearchCategorySelect categories={categories} categoryId={categoryId} setCategoryId={setCategoryId} />
      <DualSearchInput categoryId={categoryId} product_1={productA} product_2={productB} setProduct_1_Data={setProductA} setProduct_2_Data={setProductB} />
    </div>
  )
}

export default SearchContainer
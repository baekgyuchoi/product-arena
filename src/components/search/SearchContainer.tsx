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


interface SearchContainerProps {
  // Define your props here
}





const SearchContainer:React.FC<SearchContainerProps> = (props) => {
  const [category, setCategory] = useState(0); 
  const [productA, setProductA] = useState('');
  const [productB, setProductB] = useState('');
  const category_list = [
    {label: "Electronics", categories: [
      {name: "monitors", slug: "monitors", categoryId: 1},
      {name: "laptops", slug: "laptops", categoryId: 2},
      {name: "cameras", slug: "cameras", categoryId: 3},
    ]},
    {label: "Home Improvement", categories: [
      {name: "couches", slug: "couches", categoryId: 4},
    ]},
  ]

  
  
  return (
    <>
      <Select>
        <SelectTrigger>
          <SelectValue>{category}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {category_list.map((category_group) => (
            <SelectGroup key={category_group.label} >
              {category_group.categories.map((category) => (
                <SelectItem value={category.categoryId.toString()} key={category.categoryId} onClick={() => setCategory(category.categoryId)}>{category.name}</SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}

export default SearchContainer
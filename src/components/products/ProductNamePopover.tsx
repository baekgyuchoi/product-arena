import React from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../components/ui/popover"

interface ProductNamePopoverProps {
    product_name: string;
}

const ProductNamePopover: React.FC<ProductNamePopoverProps> = (props) => {
    const { product_name } = props;
  
  

    return (
       
       <div className='text-2xl lg:text-4xl font-bold'>
            <Popover>
                <PopoverTrigger>
                    <span className=" text-center italic">{product_name.slice(0,50) + "..."}</span>
                </PopoverTrigger>
                <PopoverContent className='w-screen lg:w-1/3'>
                    <span className="text-lg w-screen lg:w-1/3 whitespace-normal ">{product_name}</span>
                </PopoverContent>
            </Popover>
        </div>
                    
    )
}
export default ProductNamePopover;;
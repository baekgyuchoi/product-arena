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
                <PopoverContent className=''>
                    <span className="text-lg ">{product_name}</span>
                </PopoverContent>
            </Popover>
        </div>
                    
    )
}
export default ProductNamePopover;;
import { ProductResult } from '@/src/lib/validators/ProductResult';
import React from 'react';
import ProductRating from '../products/ProductRating';

interface SearchItemButtonProps {
    // Define the props for your component here
    product_data: ProductResult
}

const SearchItemButton: React.FC<SearchItemButtonProps> = (props) => {
    // Implement your component logic here
    const productData = props.product_data;
    return (
        // JSX code for your component goes here
        <div className='rounded-md flex items-center justify-center px-3 py-1 gap-1 bg-white'>
            {/* Add your component content here */}
            <img src={productData.imageURL} className='w-28 h-28 object-contain' />
            <div className='ml-2 flex flex-col items-center  w-full justify-center whitespace-wrap '>
                <span className='italic'>{productData.name}</span>
                <div className='flex items-center justify-center gap-4'>
                    
                    <span>${(productData.price === 0)? ("N/A"): (productData.price)}</span>
                    <ProductRating rating={productData.rating} ratings_total={productData.ratings_total} />
                </div>
              
            </div>
        </div>
    );
};

export default SearchItemButton;
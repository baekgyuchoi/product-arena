import React from 'react';
import ProductNamePopover from './ProductNamePopover';



interface ProductIntroBoxProps {
    brand: string | undefined;
    name: string;
    rating: number;
    ratings_total: number;
}

const ProductIntroBox: React.FC<ProductIntroBoxProps> = (props) => {
    
    return (
        <div className="my-4">
            <h1 className='hidden'>{props.name + " Reviews Summarized"}</h1>
            <span className="text-2xl text-blue-800 font-bold mb-2">{props.brand || ""} </span>
            <ProductNamePopover product_name={props.name} />
            
        </div>
    );
};

export default ProductIntroBox;
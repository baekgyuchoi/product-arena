'use client'
import React from 'react';
import Rating from '@mui/material/Rating';


interface ProductRatingProps {
    rating: number;
    ratings_total: number;
    size?: 'small' | 'medium' | 'large';
}

const ProductRating: React.FC<ProductRatingProps> = (props) => {
    const rating = props.rating;

    let ratingArray = [false,false,false,false,false,false,false,false,false,false];
    ratingArray = ratingArray.map((val, index) => {
        if (index < Math.floor(rating*2)) {
            return true
        }
        else{
            if (index == Math.floor(rating*2)){
                const decimalPart = rating*2 - Math.floor(rating*2);
    
                return decimalPart >= 0.5
            }
            return false
        }
    })

    let size : 'small' | 'large' | 'medium' = 'medium';
    if (props.size) {
        size = props.size
    }
    


    return (
        <div className="my-4">
            <Rating name="read-only" value={rating} readOnly size={size} precision={0.5} />
            <span className="text-sm text-gray-600">{props.rating + " (" + props.ratings_total + " ratings)"}</span>
        </div>
    );
};

export default ProductRating;
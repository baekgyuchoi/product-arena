// pages/categories.tsx

import React from 'react';
import CategoryItem from '@/src/components/categories/CategoryItem';

const categories = [
    {
        title: 'Electronics',
        items: ['Monitors', 'Laptops', 'Cameras', 'VR Headsets']
    },
    {
        title: 'Home Improvement',
        items: ['BBQ Grills', 'Couches', 'Mattresses']
    },
    // {
    //     title: 'Music',
    //     items: ['Piano/Keyboard', 'Speakers', 'Headphones']
    // }
];

const AllCategoriesPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto my-8 px-4 mt-32">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">All Categories</h1>
            {categories.map((category, index) => (
                <CategoryItem key={index} title={category.title} items={category.items} />
            ))}
        </div>
    );
};

export default AllCategoriesPage;


'use client'
import Link from 'next/link';
import React from 'react';

type Props = {
    title: string;
    items: {title: string, slug: string}[];
};

const CategoryItem: React.FC<Props> = ({ title, items }) => {
    return (
        <div className="p-6 mb-6 shadow-lg rounded-lg bg-white">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <Link 
                        href={`/categories/${item.slug}`}
                        key={index}
                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryItem;


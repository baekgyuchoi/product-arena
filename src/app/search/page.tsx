'use client'
// pages/compare.tsx

import React, { useState } from 'react';
import Head from 'next/head';

const SearchPage: React.FC = () => {
    const [productA, setProductA] = useState('');
    const [productB, setProductB] = useState('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add logic to handle comparison or fetch data based on productA and productB
        alert(`Comparing Product A: ${productA} with Product B: ${productB}`);
    };

    return (
        <>
            <Head>
                <title>Product Comparison</title>
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen py-12">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Product Comparison Tool</h1>
                <form onSubmit={handleSearch} className="space-y-6">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Enter Product A"
                            className="form-input px-4 py-3 rounded-lg shadow-sm border-gray-300 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            value={productA}
                            onChange={(e) => setProductA(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Enter Product B"
                            className="form-input px-4 py-3 rounded-lg shadow-sm border-gray-300 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            value={productB}
                            onChange={(e) => setProductB(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Compare
                    </button>
                </form>
            </div>
        </>
    );
};

export default SearchPage;

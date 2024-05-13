import React from 'react';
import { SparklesCore } from '../ui/sparkles';
import SearchInput from '../search/SearchInput';

const MobileHero: React.FC = () => {
    return (
        <div className="relative text-gray-200 h-screen  flex flex-col gap-20 items-center justify-center max-w-7xl  mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 z-10">
            <div className='w-full absolute inset-0 h-screen'>
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className='text-center'>
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                    <span className="italic text-4xl md:text-7xl">Product <span className="text-blue-700">Arena</span> </span> 
                </h1>
                <span className='text-center text-lg italic md:text-xl'>From Thousands of Reviews to One Simple Summary</span>
            </div>
            <div className='w-full sm:w-2/3'>
                <SearchInput    />
            </div>
            <div>
                <p className="text-center max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                We distill thousands of Amazon reviews into concise, insightful summaries. Search to get started. 
                </p>
            
            </div>
            <div className='absolute bottom-0 w-screen bg-transparent h-36'>
                <div className='flex items-center justify-center'>
                    <div className="flex items-center justify-center h-full lg:w-1/2">
                        <div className="bg-white rounded-lg p-4">
                            <h2 className="text-xl font-bold text-gray-600 mb-2"> <span className='bg-blue-800 rounded-md p-1 text-white'>Beta</span> Notices</h2>
                            <p className="text-gray-600">We currently support the following categories of products: <span className='italic font-medium'>Cameras, Laptops, Monitors, VR-Headsets, Couches, BBQ Grills, and Mattresses </span></p>
                            {/* Add your notices and announcements here */}
                        </div>
                    </div>
                </div>
                   
            </div>
            
        </div>
    );
};

export default MobileHero;
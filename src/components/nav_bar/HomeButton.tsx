
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    // Define the props for your component here
}



const HomeButton: React.FC<Props> = ({ /* Destructure your props here */ }) => {
    // Define your component logic here
    
    return (
        // Return your JSX here
        <Link 
        href="/"
        className="">
        <div className='flex items-center justify-center italic '>
            <div className=" flex items-center justify-center rounded p-2 transition text-gray-600  " >
                <div
                    className="flex items-center justify-center  text-white font-bold text-4xl tracking-tight hover:text-gray-300 focus:outline-none focus:shadow-outline"
                >
                
                    <span className=" text-3xl sm:text-4xl font-medium">Product <span className='text-blue-800'>Arena</span></span>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default HomeButton;
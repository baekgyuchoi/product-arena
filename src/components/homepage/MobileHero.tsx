import React from 'react';
import { SparklesCore } from '../ui/sparkles';

const MobileHero: React.FC = () => {
    return (
        <div className="text-gray-200 h-screen relative flex flex-col items-center justify-center max-w-7xl  mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 z-10">
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

            <h1 className="text-white text-2xl md:text-5xl font-bold dark:text-white">
                <span className="italic text-2xl md:text-7xl">Product <span className="text-blue-700">Arena</span>: </span> <br /> From Thousands of Reviews to One Simple Summary
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                We leverage advanced AI to distill thousands of Amazon reviews into concise, insightful summaries. Make confident purchasing decisions by comparing products side by side to see which fits your needs based on real user feedback. 
            </p>
        </div>
    );
};

export default MobileHero;
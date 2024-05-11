
import React from 'react';

import ComparisonArticleBarChart from './ComparisonArticleBarChart';

interface ComparisonArticleContentProps {
    comparison_content: string;
}


const ComparisonArticleContent: React.FC<ComparisonArticleContentProps> = ({ comparison_content }) => {
    const comparison_content_json = JSON.parse(comparison_content)
    console.log(comparison_content_json)
    const comparison_content_sections = comparison_content_json.comparison.sections
    const comparison_summary = comparison_content_json.comparison.content

    const labels = comparison_content_json.comparison.sections.map((section: any) => section.title)
    const product_1_scores = comparison_content_json.comparison.sections.map((section: any) => section.product_1_score)
    const product_2_scores = comparison_content_json.comparison.sections.map((section: any) => section.product_2_score)
    

    return (
        <>
            <div className='w-full  flex flex-col justify-center items-center'>
                <ComparisonArticleBarChart product_1_name={comparison_content_json.product1.name.slice(0,20) + "..."} product_2_name={comparison_content_json.product2.name.slice(0,20) + "..."} labels = {labels} scores_1={product_1_scores} scores_2={product_2_scores}/>
            </div>
            <article className='flex flex-col lg:px-16'>
                <span className='text-base text-gray-800 my-4'>
                    {comparison_summary}
                </span>
                <div>
                    {comparison_content_sections.map((section: any) => (
                        <div key={section.title} className='my-2 text-gray-800'>
                            <h3 className='text-black my-1 font-semibold pl-1'>{section.title}</h3>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </div>
            </article>
        </>
    );
};

export default ComparisonArticleContent;

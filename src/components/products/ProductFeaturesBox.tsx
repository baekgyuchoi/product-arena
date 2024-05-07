import React from 'react';

interface ProductFeaturesBoxProps {
    features: string[];
}

const ProductFeaturesBox: React.FC<ProductFeaturesBoxProps> = ({ features }) => {
    return (
        <section className="my-6 lg:p-4 bg-white rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features:</h2>
            <ul className="list-inside list-disc space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-700">{feature}</li>
                ))}
            </ul>
        </section>
    );
};

export default ProductFeaturesBox;

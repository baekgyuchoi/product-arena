
'use client'
import { ProductTag } from '@/src/lib/validators/ProductTag';

import React, { useState } from 'react';
import DualSearchInput from '../search/DualSearchInput';
import ProductTagSelection from './ProductTagSelection';
import { ProductResult } from '@/src/lib/validators/ProductResult';

type Props = {
    category_id: number;
    tags_list: ProductTag[];
    category_slug: string;
    default_tag?: ProductTag;
};

const CategoryDetailsDisplay: React.FC<Props> = ({ category_id, tags_list, category_slug, default_tag }) => {
    const [product_1, setProduct_1_Data] = useState<ProductResult | null>(null);
    const [product_2, setProduct_2_Data] = useState<ProductResult | null>(null);
    return (
        <div className="">
            
            <div className="w-full flex mb-8 mt-2">
                <DualSearchInput categorySlug={category_slug} categoryId={category_id} product_1={product_1} setProduct_1_Data={setProduct_1_Data} product_2={product_2} setProduct_2_Data={setProduct_2_Data} />
            </div>
            {/* <ProductTagSelection tags_list={tags_list} default_tag={default_tag} category_slug={category_slug} product_1={product_1} setProduct_1_Data={setProduct_1_Data} product_2={product_2} setProduct_2_Data={setProduct_2_Data} /> */}

        </div>
    );
};

export default CategoryDetailsDisplay;
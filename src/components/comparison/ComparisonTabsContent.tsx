
import React from 'react';
import { ProductResult } from '@/src/lib/validators/ProductResult';
import { ProductDetail } from '@/src/lib/validators/ProductDetails';
import ProductFeaturesBox from '../products/ProductFeaturesBox';
import ProductSpecificationsTable from '../products/ProductSpecificationsTable';
import ProductReviewArticleContainer from '../products/ProductReviewArticleContainer';
import RelatedProductsBox from '../products/RelatedProductsBox';
import prisma from '@/src/app/helper/db';
import ProductBuyButton from '../products/ProductBuyButton';

type Specification = {
    name: string;
    value: string;
};

interface ComparisonTabsContentProps {
    product_data: ProductResult;
}

async function getCategoryName(categoryId: number) {
    
    const category = await prisma.productCategories.findUnique({
        where: {
            id: categoryId
        }
    })
    
    return category?.name
}



const ComparisonTabsContent: React.FC<ComparisonTabsContentProps> = async (props) => {
    const productData = props.product_data;
    const productDetails  = productData.product_details as ProductDetail;

    const feature_bullets_flat = productDetails?.feature_bullets_flat;
    const specifications_flat = productDetails?.specifications_flat;
    const base_image = productData.imageURL;

    const category_name = await getCategoryName(productData.categoryId) as string
    
  
    // Parse the JSON string into an array
    const features = JSON.parse(feature_bullets_flat ?? "[]") as string[];
    const specifications = JSON.parse(specifications_flat ?? "[]") as Specification[]; 
    const related_products = JSON.parse(productDetails.related_products ?? "[]") as string[];
  
    const images = [base_image as string];
  
    for (let i = 1; i <= 3; i++) {
      const image = productDetails[`image_extra_${i}` as keyof ProductDetail];
      if (image && image !== undefined && typeof(image) === 'string') {
        images.push(image as string);
      }
    }
    return (
        <div className=''>
            <div className='flex flex-col'>
                <div className='flex flex-col justify-between'>
                    <div className='mt-4 text-center'>
                        <span className='text-lg lg:text-xl font-semibold'>{productData.name}</span>
                    </div>
                    <div className='mt-6'>
                        <ProductBuyButton aff_link={productData.aff_link} price={productData.price} />
                    </div>
                    
                    <div>
                        
                        <ProductFeaturesBox features={features} />
                    </div>
                    <div className='lg:hidden'>
                    <ProductSpecificationsTable specifications={specifications} />
                    </div>
                </div>
                <div>
                    <ProductReviewArticleContainer asin={productData.asin} />
                </div>
                <div>
                    <RelatedProductsBox related_products={related_products} category_slug={category_name}/>
                </div>

              </div>
        </div>
    );
};

export default ComparisonTabsContent;
// Import necessary libraries
import React, { Suspense } from 'react';
import Image from 'next/image';
import { ProductDetail } from '../../lib/validators/ProductDetails';
import { ProductResult } from '@/src/lib/validators/ProductResult';
import ProductSpecificationsTable from '../products/ProductSpecificationsTable';
import ProductFeaturesBox from '../products/ProductFeaturesBox';
import ProductImagesCarousel from '../products/ProductImagesCarousel';
import ProductIntroBox from '../products/ProductIntroBox';
import { Card, CardContent, CardHeader } from '../ui/card';
import ProductVersusIcon from '../products/ProductVersusIcon';
import ProductRating from '../products/ProductRating';
import RelatedProductsBox from '../products/RelatedProductsBox';
import ProductReviewArticleContainer from '../products/ProductReviewArticleContainer';
import ComparisonIntroBox from './ComparisonIntroBox';
import ComparisonSpecificationsTable from './ComparisonSpecificationsTable';
import ComparisonTabsContainer from './ComparisonTabsContainer';
import ComparisonArticleContainer from './ComparisonArticleContainer';
import { ProductBreadcrumbs } from '../products/ProductBreadcrumbs';
import { ComparisonBreadcrumbs } from './ComparisonBreadcrumbs';
import { Loader2 } from 'lucide-react';

type Specification = {
    name: string;
    value: string;
};
interface ComparisonDetailsDisplayProps {
    // Define the props here
    product_data_1: ProductResult;
    product_data_2: ProductResult;
}

const ComparisonDetailsDisplay: React.FC<ComparisonDetailsDisplayProps> = (props) => {
  
  // Destructure the product data for easier access
    const productData_1 = props.product_data_1;
    const productData_2 = props.product_data_2;
    const productDetails_1  = productData_1.product_details as ProductDetail;
    const productDetails_2  = productData_2.product_details as ProductDetail;
 
    const feature_bullets_flat_1 = productDetails_1?.feature_bullets_flat;
    const feature_bullets_flat_2 = productDetails_2?.feature_bullets_flat;
    const specifications_flat_1 = productDetails_1?.specifications_flat;
    const specifications_flat_2 = productDetails_2?.specifications_flat;
    const base_image_1 = productData_1.imageURL;
    const base_image_2 = productData_2.imageURL;

  // Parse the JSON string into an array
    const features_1 = JSON.parse(feature_bullets_flat_1 ?? "[]") as string[];
    const features_2 = JSON.parse(feature_bullets_flat_2 ?? "[]") as string[];
    const specifications_1 = JSON.parse(specifications_flat_1 ?? "[]") as Specification[];
    const specifications_2 = JSON.parse(specifications_flat_2 ?? "[]") as Specification[];
    const related_products_1 = JSON.parse(productDetails_1.related_products ?? "[]") as string[];
    const related_products_2 = JSON.parse(productDetails_2.related_products ?? "[]") as string[];
    
    const images_1 = [base_image_1 as string];
    const images_2 = [base_image_2 as string];


    for (let i = 1; i <= 3; i++) {
        const image = productDetails_1[`image_extra_${i}` as keyof ProductDetail];
        if (image && image !== undefined && typeof(image) === 'string') {
        images_1.push(image as string);
        }
    }
    for (let i = 1; i <= 3; i++) {
        const image = productDetails_2[`image_extra_${i}` as keyof ProductDetail];
        if (image && image !== undefined && typeof(image) === 'string') {
        images_2.push(image as string);
        }
    }

  
  
  return (
    <>
    <main className="">
      <div className='mt-8 flex flex-col items-center md:px-4 py-8'>
        <div className='flex w-full flex-1 flex-col items-center pl-0 pr-0 '>
            <Card className=" pb-16 text-black  sm:w-3/4 w-full mb-0.5 flex-1 rounded-t-3xl from-primary to-primary/80 shadow-xl border-blue-800 border-2  sm:mb-8 sm:flex-initial sm:rounded-b-3xl">
              <CardHeader className="mt-12 sm:mt-18 mx-6 flex flex-col items-center ">
               
              
                <div className='w-full flex mb-8 items-center justify-center'>
                  <ComparisonIntroBox asin_1={productData_1.asin} brand_1={productDetails_1.brand} name_1={productData_1.name!} rating_1={productData_1.rating} ratings_total_1={productData_1.ratings_total} base_image_1={productData_1.imageURL!} aff_link_1={productData_1.aff_link} price_1={productData_1.price} asin_2={productData_2.asin} brand_2={productDetails_2.brand} name_2={productData_2.name!} rating_2={productData_2.rating} ratings_total_2={productData_2.ratings_total} base_image_2={productData_2.imageURL!} aff_link_2={productData_2.aff_link} price_2={productData_2.price} />
                </div>
                  
                  
                
              </CardHeader>
              <CardContent className=" md:px-10">
                <div className='flex flex-col'>
                  <Suspense fallback={
                    <div className='w-full h-72 flex flex-col justify-center items-center'>
                      <Loader2 className='animate-spin mb-2 ' size={45} />
                      <span className='text-sm italic'>Loading... please wait ~30 seconds</span>
                    </div>
                  }>
                    <ComparisonArticleContainer asin_1={productData_1.asin} asin_2={productData_2.asin} product_data_1={productData_1} product_data_2={productData_2}/>
                  </Suspense>
                  <ComparisonSpecificationsTable specification_1={specifications_1} specification_2={specifications_2} />
                  <ComparisonTabsContainer productData_1={productData_1} productData_2={productData_2} />
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </main>
      
    </>
  );
};

// Example Product Data
export default ComparisonDetailsDisplay;
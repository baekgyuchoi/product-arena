// Import necessary libraries
import React from 'react';
import Image from 'next/image';
import { ProductDetail } from '../../lib/validators/ProductDetails';
import { ProductResult } from '@/src/lib/validators/ProductResult';
import ProductSpecificationsTable from './ProductSpecificationsTable';
import ProductFeaturesBox from './ProductFeaturesBox';
import ProductImagesCarousel from './ProductImagesCarousel';
import ProductIntroBox from './ProductIntroBox';
import { Card, CardContent, CardHeader } from '../ui/card';
import ProductVersusIcon from './ProductVersusIcon';
import ProductRating from './ProductRating';
import RelatedProductsBox from './RelatedProductsBox';
import ProductReviewArticleContainer from './ProductReviewArticleContainer';
import { ProductBreadcrumbs } from './ProductBreadcrumbs';
import { Separator } from '../ui/separator';
import ProductBuyButton from './ProductBuyButton';

type Specification = {
    name: string;
    value: string;
};
interface ProductDetailsDisplayProps {
    // Define the props here
    product_data: ProductResult;

}

const ProductDetailsDisplay: React.FC<ProductDetailsDisplayProps> = (props) => {
  
  // Destructure the product data for easier access
  const productData = props.product_data;
  const productDetails  = productData.product_details as ProductDetail;
  const brand = productDetails?.brand;
  const image_extra_1 = productDetails?.image_extra_1;
  const image_extra_2 = productDetails?.image_extra_2;
  const image_extra_3 = productDetails?.image_extra_3;
  const feature_bullets_flat = productDetails?.feature_bullets_flat;
  const specifications_flat = productDetails?.specifications_flat;
  const base_image = productData.imageURL;
  

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
    <>
    <main className="">
      <div className='mt-8 flex flex-col items-center md:px-4 py-8'>
        <div className='flex w-full flex-1 flex-col items-center '>
            <Card className="bg-gray-50 pb-16 text-black  sm:w-3/4 w-full mb-0.5 flex-1 rounded-t-3xl from-primary to-primary/80 shadow-xl border-blue-800  border-t-2 lg:border-2  sm:mb-8 sm:flex-initial sm:rounded-b-3xl">
            <CardHeader className="mt-12 sm:mt-18 mx-0 sm:mx-6 flex flex-col items-center ">
              <div className='w-full  lg:px-8'>
          
                <ProductIntroBox brand={productDetails.brand} name={productData.name} rating={productData.rating} ratings_total={productData.ratings_total} />    
              </div>
              <div className='w-full flex items-start mb-2 lg:px-8'>
                <ProductRating rating={productData.rating} ratings_total={productData.ratings_total} size={"large"} />
              </div>
              
              <div className='flex flex-col  items-center w-full'>
                <div className="w-4/5 flex flex-col items-center justify-center mb-8 md:mb-0 md:mr-8 ">
                  <ProductImagesCarousel images={images} base_image={base_image as string} />
                </div>
                <div className='px-8 w-full flex justify-center items-center mt-2 mb-4'>

                  <ProductBuyButton aff_link={productData.aff_link} price={productData.price} />
                </div>
                <div className=' h-fit w-screen'>
                  <ProductVersusIcon category_id={productData.categoryId} related_products={related_products} asin={productData.asin}/>
                </div>
              </div>
             
              <div className='w-full pt-4'>
                <Separator />
              </div>
              
            </CardHeader>
            <CardContent className="sm:mx-6 sm:px-10">
              <div className='flex flex-col'>
                <div className='flex flex-col justify-between'>
                  <div>
                    <ProductFeaturesBox features={features} />
                  </div>
                  <ProductSpecificationsTable specifications={specifications} />
                </div>
                <div>
                  <ProductReviewArticleContainer asin={productData.asin} />
                </div>
                <div>
                  <RelatedProductsBox related_products={related_products}  />
                </div>

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
export default ProductDetailsDisplay;
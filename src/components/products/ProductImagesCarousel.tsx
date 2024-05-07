import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"

interface ProductImagesCarouselProps {
    images: string[];
    base_image: string;
}

const ProductImagesCarousel: React.FC<ProductImagesCarouselProps> = (props) => {
    
    
    //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    //     {props.images.map((url, index) => {
    //       if (!url) return null;
    //       return (
    //       <div key={index} className="max-w-sm">
    //         <Image src={url!} alt={`Product Image ${index + 1}`} width={500} height={500} />
    //       </div>
    //       )
    //     })}
    //   </div>
    return (
        <Carousel className="w-full max-w-lg">
            <CarouselContent>
                {props.images.map((url, index) => {
                    if (!url) return null;
                    return(
                        <CarouselItem key={index} className='flex items-center justify-center'>
                            
                            <Card className='p-1 bg-white rounded-md w-full h-64 flex items-center justify center'>
                                <Image src={url!} alt={`Product Image ${index + 1}`} width={500} height={500} className='mx-auto object-scale-down h-full' />
                                {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent> */}
                            </Card>
                            
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default ProductImagesCarousel;
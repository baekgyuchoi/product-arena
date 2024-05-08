'use client'
import Image from "next/image";
import ProductGridCard from "./ProductGridCard";
import { ProductTag } from "@/src/lib/validators/ProductTag";
import { ProductResult } from "@/src/lib/validators/ProductResult";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { set } from "zod";
import { blue } from "@mui/material/colors";
import { useRouter } from "next/navigation";





interface ProductGridContainerProps {
    productArray: ProductResult[];
    selectedTag: ProductTag;
    categorySlug: string;
    product_1: ProductResult | null;
    product_2: ProductResult | null;
    setProduct_1_Data: React.Dispatch<React.SetStateAction<ProductResult | null>>;
    setProduct_2_Data: React.Dispatch<React.SetStateAction<ProductResult | null>>;
}

const ProductGridContainer: React.FC<ProductGridContainerProps> = (props) => {
    const router = useRouter();
    const [blueBorder, setBlueBorder] = useState<string|undefined|null>(props.product_1?.asin)
    const [redBorder, setRedBorder] = useState<string|undefined|null>(props.product_2?.asin)

    function handleCardClick(product: ProductResult) {
   
        // href={"/products/" + product.asin + "?category=" + props.categorySlug}
        if(product.asin === props.product_1?.asin) {
            router.push('/products/' + product.asin + '?category=' + props.categorySlug)
            props.setProduct_1_Data(null)
            setBlueBorder(null)
            
            return
        }
        if(product.asin === props.product_2?.asin) {
            router.push('/products/' + product.asin + '?category=' + props.categorySlug)
            props.setProduct_2_Data(null)
            setRedBorder(null)
            
            return
        }
      
        if (props.product_1 === null && props.product_2 === null) {
            props.setProduct_1_Data(product)
            setBlueBorder(product.asin)
            return
        }
        else if (props.product_1 !== null && props.product_2 === null) {
            props.setProduct_2_Data(product)
            setRedBorder(product.asin)
            return
        }
        else if (props.product_1 === null && props.product_2 !== null) {
            props.setProduct_1_Data(product)
            setBlueBorder(product.asin)
            return
        }


        return
    }
    useEffect(() => {
        if (props.product_1 === null) {
            setBlueBorder(null);
        } else {
            setBlueBorder(props.product_1.asin);
        }
    
        if (props.product_2 === null) {
            setRedBorder(null);
        } else {
            setRedBorder(props.product_2.asin);
        }
    }, [props.product_1, props.product_2]);
    
    return(
        <>
        <div>
            <div className="mt-12 lg:px-12">
               
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-4">
                    {props.productArray.map(product => {
                       
                        console.log(product.asin === blueBorder)
                        if(product.asin === blueBorder) {
                            return (
                                <button 
                                    className={`rounded-xl border-4 border-blue-500 border-solid`}
                                    onClick={() => handleCardClick(product)}
                                >
                                    <ProductGridCard key={product.id} product={product}/>
                                </button>
                            )
                        }
                        if (product.asin === redBorder) {
                            return (
                                <button 
                                    className={`rounded-xl border-4 border-red-500 border-solid`}
                                    onClick={() => handleCardClick(product)}
                                >
                                    <ProductGridCard key={product.id} product={product}/>
                                </button>
                            )
                        }
                        return (
                            <button 
                                className={`rounded-xl border-4 border-transparent`}
                                onClick={() => handleCardClick(product)}
                            >
                                <ProductGridCard key={product.id} product={product}/>
                            </button>
                        )}
                    )}
                </div>
            </div>
        </div>
   
    </>
    )
}


export default ProductGridContainer;
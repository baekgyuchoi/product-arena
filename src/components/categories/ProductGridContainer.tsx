import Image from "next/image";
import ProductGridCard from "./ProductGridCard";
import { ProductTag } from "@/src/lib/validators/ProductTag";
import { ProductResult } from "@/src/lib/validators/ProductResult";
import Link from "next/link";




interface ProductGridContainerProps {
    productArray: ProductResult[];
    selectedTag: ProductTag;
    categorySlug: string;
}

const ProductGridContainer: React.FC<ProductGridContainerProps> = (props) => {
  

    
    return(
        <>
        <div>
            <div className="mt-12">
               
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-4">
                    {props.productArray.map(product => (
                    
                        <Link href={"/products/" + product.asin + "?category=" + props.categorySlug} className="relative z-1">
                            <ProductGridCard key={product.id} product={product}/>
                        </Link>
                     
                    ))}
                </div>
            </div>
        </div>
   
    </>
    )
}


export default ProductGridContainer;
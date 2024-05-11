

import Link from "next/link";
import ProductGridCard from "../categories/ProductGridCard";
import { ProductResult } from "@/src/lib/validators/ProductResult";






interface SearchResultsGridProps {
    productArray: ProductResult[];
}

const SearchResultsGrid: React.FC<SearchResultsGridProps> = (props) => {
    console.log(props.productArray)
    return(
        <>
        <div>
            <div className="mt-12 lg:px-12">
               
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-4">
                    {props.productArray.map(product => {
                       
                        return (
                            <Link href={"/products/" + product.asin}>
                                <ProductGridCard key={product.id} product={product}/>
                            </Link>
                        )}
                    )}
                </div>
            </div>
        </div>
   
    </>
    )
}


export default SearchResultsGrid;
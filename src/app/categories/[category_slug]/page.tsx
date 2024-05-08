import Image from "next/image";
import prisma from "../../helper/db";
import ProductGridContainer from "@/src/components/categories/ProductGridContainer";
import ProductTagSelection from "@/src/components/categories/ProductTagSelection";
import { ProductTag } from "@/src/lib/validators/ProductTag";
import ProductPagination from "@/src/components/categories/ProductsPagination";
import SearchInput from "@/src/components/search/SearchInput";
import DualSearchInput from "@/src/components/search/DualSearchInput";
import CategoryDetailsDisplay from "@/src/components/categories/CategoryDetailsDisplay";
import { CategoryBreadcrumbs } from "@/src/components/categories/CategoryBreadcrumbs";

export default async function CategoryPage({ params, searchParams }: {
    params: { category_slug : string };
    searchParams?: { [key: string]: string | null};
    
    }) {

    const page_number = parseInt(searchParams?.page || "1")
    const categorySlug = params.category_slug;
        

    let category = null;
    let products = null
    try{
        category = await prisma.productCategories.findUnique({
            where: {
                slug: categorySlug
            },
            include: {
                tags: true
            }
        });
  
   
    }
    catch(err){
        console.log(err);
    }
    try{
        products = await prisma.products.findMany({
            where: {
                tags: {
                    some: {
                        slug: categorySlug
                    }
                }
            },
            orderBy:{
                rating: 'desc'
            },
            take: 20
        })
    }
    catch(err){
        console.log(err);
    }
  
    const tags_list = category?.tags as ProductTag[];
   
    const default_tag = tags_list.filter(tag => tag.slug === categorySlug.toLowerCase())[0];
    
    console.log(category?.id)
    return(
        <div>
            
            <div className="mt-32 flex flex-col items-center justify-center text-black p-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">{category?.name}</h1>
                <div className="w-full flex justify-start pr-10">
                    <CategoryBreadcrumbs categoryName={category?.name!} />   
                </div>
            </div>
            
            {/* <div className="w-full flex mb-8 mt-2">
                <DualSearchInput categoryId={category?.id!} />
            </div>
            <ProductTagSelection tags_list={tags_list} default_tag={default_tag} category_slug={categorySlug}/> */}
            <CategoryDetailsDisplay category_id={category?.id!} tags_list={tags_list} category_slug={categorySlug} default_tag={default_tag}/>
      
        </div>
    )
}


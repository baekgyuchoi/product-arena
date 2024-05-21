import { get } from "http";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "../../components/ui/breadcrumb"

import prisma from '@/src/app/helper/db';


interface CategoryBreadcrumbsProps {
    categoryName: string;
}

async function getCategoryName(asin: string) {
    const response = await prisma.products.findUnique({
        where: {
            asin: asin,
            product_details: {
                isNot: null
            },
            product_rating: {
                isNot: null
            },
            article: {
                isNot: null
            }
        }
    })
 
    const category_id = response?.categoryId;

    const category = await prisma.productCategories.findUnique({
        where: {
            id: category_id
        }
    })
    
    return category?.name
}

export async function CategoryBreadcrumbs(props: CategoryBreadcrumbsProps) {
    const { categoryName } = props;
    let category_name = categoryName
  
    

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink className="text-black" href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-black" />
                {/* <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1">
                            <BreadcrumbEllipsis className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>Documentation</DropdownMenuItem>
                            <DropdownMenuItem>Themes</DropdownMenuItem>
                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator /> */}
                <BreadcrumbItem>
                    <BreadcrumbLink className="text-black" href="/categories">Categories</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-black" />
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-black font-black">{category_name}</BreadcrumbPage>
                </BreadcrumbItem>
             
            </BreadcrumbList>
        </Breadcrumb>
    );
}
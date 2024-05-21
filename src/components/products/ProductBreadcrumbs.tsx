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
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import prisma from '@/src/app/helper/db';


interface ProductBreadcrumbsProps {
    categoryName: string;
    asin: string;
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

export async function ProductBreadcrumbs(props: ProductBreadcrumbsProps) {
    const { categoryName, asin } = props;
    let category_name = categoryName
  
    if (categoryName === undefined || categoryName === null) {
        category_name = await getCategoryName(asin) as string
    }
    console.log(category_name)

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
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
                    <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/categories/${category_name}`}>{category_name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{asin}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}
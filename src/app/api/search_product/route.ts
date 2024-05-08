import prisma from "../../helper/db"

async function get_products_from_tag(tag_slug: string, page_number: number) {
    const products = await prisma.products.findMany({
        where: {
            tags: {
                some: {
                    slug: tag_slug
                }
            }
        },
        include: {
            product_rating: true,
            product_details: true
        },
        orderBy:{
            ratings_total: 'desc'
        },
        take: 20,
        skip: (page_number - 1) * 20
    })
    return products
}

async function get_products_from_tag_count(tag_slug: string) {
    const count = await prisma.products.count({
        where: {
            tags: {
                some: {
                    slug: tag_slug
                }
            }
        }
    })
    return count

}

async function get_products_from_search_query(search_query: string, page_number: number, categoryId: number) {
    const products = await prisma.products.findMany({
        where: {
            categoryId: categoryId,
            name: {
                contains: search_query
            }
        },
        orderBy:{
            _relevance: {
                fields: ['name'],
                search: search_query,
                sort: 'desc'
            }
        },
        take: 20,
        skip: (page_number - 1) * 20
        
    })
    return products

}


export async function GET(request: Request) {
    const url = new URL(request.url)
    const queryParam = url.searchParams
    console.log(queryParam)

    const search_query = (queryParam.get('q') || "")

    const category_id = (queryParam.get('cat') || "")
    const categoryId = parseInt(category_id)


    const results = await get_products_from_search_query(search_query, 1, categoryId)


    return new Response(JSON.stringify({productArray: results}), {status: 200})

}



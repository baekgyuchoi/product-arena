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


export async function GET(request: Request) {
    const url = new URL(request.url)
    const queryParam = url.searchParams


    const tag_slug = (queryParam.get('tag_slug') || "")
    const page_number = parseInt(queryParam.get('page_number') || "1")

    try{

        const products = await get_products_from_tag(tag_slug, page_number)
        const count = await get_products_from_tag_count(tag_slug)
        return new Response(JSON.stringify({productArray: products, count: count}), {status: 200})

    }catch(err){

        return new Response(JSON.stringify({error: err}), {status: 500})

    }
}



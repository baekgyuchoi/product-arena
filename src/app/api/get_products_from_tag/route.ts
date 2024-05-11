import prisma from "../../helper/db"

async function get_products_from_search(search_query: string, page_number: number) {
    const products = await prisma.products.findMany({
        where: {
            name:{
                search: search_query
            }
        },
        include: {
            
        },
        orderBy:{
            _relevance: {
                fields: ['name'],
                search: search_query,
                sort: 'desc'
            }
        },
        take: 16,
        skip: (page_number - 1) * 16
    })
    return products
}

async function get_products_from_search_count(search_query: string) {
    const count = await prisma.products.count({
        where: {
            name:{
                search: search_query
            }
        },
        
    })
    return count

}


export async function GET(request: Request) {
    const url = new URL(request.url)
    const queryParam = url.searchParams
    

    const search_query = (queryParam.get('search') || "")
    const page_number = parseInt(queryParam.get('page_number') || "1")
    console.log(search_query, page_number)
    try{

        const products = await get_products_from_search(search_query, page_number)
        const count = await get_products_from_search_count(search_query)
        return new Response(JSON.stringify({productArray: products, count: count}), {status: 200})

    }catch(err){

        return new Response(JSON.stringify({error: err}), {status: 500})

    }
}



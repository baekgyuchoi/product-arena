import { ProductResult } from "@/src/lib/validators/ProductResult"
import prisma from "../../helper/db"

async function get_products_from_search_query(search_query: string, page_number: number) {
    console.log(search_query)
    const products = await prisma.products.findMany({
        where: {
          
                product_details: {
                    isNot: null
                },
                product_rating: {
                    isNot: null
                },
                article: {
                    isNot: null
                },
            
                // product_details: {
                //     keywords_list: {
                //         search: search_query
                //     }
                // }
            
                
                name: {
                    search: '+' + search_query.split(' ').join(' +')
                }
                
         
        },
        orderBy:[
            {
                _relevance: {
                    fields: ['name'],
                    search: search_query,
                    sort: 'desc'
                }
            },

        ],
        take: 20,
        skip: (page_number - 1) * 20,
        include: {
           product_details:true
        }
        
    })
    // const products = await prisma.$queryRaw`SELECT * FROM Products WHERE MATCH(name) AGAINST(${search_query} IN NATURAL LANGUAGE MODE) LIMIT 20 OFFSET ${(page_number-1) * 20};`

    // // const products = await prisma.$queryRaw`SELECT *, MATCH(name) AGAINST(${search_query} IN NATURAL LANGUAGE MODE) AS relevance FROM Products WHERE MATCH(name) AGAINST(${search_query} IN NATURAL LANGUAGE MODE) ORDER BY relevance DESC LIMIT 20 OFFSET ${(page_number - 1) * 20}`;
    // console.log(products.map((product)=>{ return product.keywords_list }) )
    console.log(products.map((product)=>{ return product.name, product.product_details?.keywords_list }))
    
    return products as ProductResult[]

}



async function get_products_from_search_query_with_category(search_query: string, page_number: number, categoryId: number) {
    const products = await prisma.products.findMany({
        where: {
            name: {
                contains: search_query
            },
            product_details: {
                isNot: null
            },
            product_rating: {
                isNot: null
            },
            article: {
                isNot: null
            },
            categoryId: categoryId
        },
        orderBy:{
            _relevance: {
                fields: ['name'],
                search: search_query,
                sort: 'desc'
            }
        },
        take: 20,
        skip: (page_number - 1) * 20,
        include: {
            product_rating: true,
            product_details: true
        }
        
    })
    
    return products as ProductResult[]

}


export async function GET(request: Request) {
    const url = new URL(request.url)
    const queryParam = url.searchParams
  

    const search_query = (queryParam.get('q') || "")

    const category_id = (queryParam.get('cat') || "")
    const categoryId = parseInt(category_id)

    const page_number = parseInt(queryParam.get('page') || "1")

   

    let results:ProductResult[] = []
    if(category_id !== "") {
        results = await get_products_from_search_query_with_category(search_query, page_number, categoryId)
    }
    else {
        results = await get_products_from_search_query(search_query, page_number)
    }

  
    return new Response(JSON.stringify({productArray: results}), {status: 200})

}



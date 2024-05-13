import prisma from "../../helper/db";


const root_URL = "https://www.productarena.org";

async function fetchComparisons(pageNumber: number) {
    console.log("page number:", pageNumber)
    const comparison_arr = await prisma.productComparison.findMany({
        take: 10000,
        skip: (pageNumber) * 10000,
        orderBy: {
            asinconcat: 'asc'
        },
        select: {
            asinconcat: true,
            firstProductAsin: true,
            secondProductAsin: true,
            updatedAt: true
        }
    })
    console.log(comparison_arr)
    const comparison_pages = comparison_arr.map((comparison) => ({
        url: `${root_URL}/comparisons?p_a=${comparison.firstProductAsin}&p_b=${comparison.secondProductAsin}`.split("&").join("&amp;"),
        lastModified: comparison.updatedAt.toISOString(),
    
    }))

    console.log(comparison_pages)

    return [...comparison_pages]
}   

async function getComparisonsCount() {
    const count = await prisma.productComparison.count()
    return count

}

async function getProductsCount() {
    const count = await prisma.products.count()
    return count
}


async function fetchProducts(pageNumber: number) {
    const products_arr = await prisma.products.findMany({
        take: 10000,
        skip: (pageNumber) * 10000,
        orderBy: {
            asin: 'asc'
        },
        select: {
            asin: true,
            updatedAt: true
        }
    })
  
    const product_pages = products_arr.map((product) => ({
        url: `${root_URL}/products/${product.asin}`,
        lastModified: product.updatedAt.toISOString(),
    
    }))

    // const wiki_pages = simple_pages.map((page) => {
    //     return {
    //         url: `${root_URL}/completed_pages/${page.page_title}?page=${page.page_id}`,
    //         lastModified: page.simple_meanings[0].createdAt.toISOString(),
    //     }
    // })
   
    return [...product_pages]
}

export async function GET(request: Request) {
        
    try {
        const url = new URL(request.url)
        const currentPage = url.pathname

        const pageNumber = parseInt(currentPage.split('/').pop() || '0');
        
        const products_count = await getProductsCount()
        const comparisons_count = await getComparisonsCount()
        console.log("page:", pageNumber)
        console.log(products_count, comparisons_count)

        if(pageNumber > (Math.ceil(comparisons_count / 10000) + Math.ceil(products_count / 10000))) {
            
            throw new Error('No items found for the given page number');
            
        }

        let data = []

        if (pageNumber > products_count / 10000) {
            console.log("hey")
            data = await fetchComparisons(pageNumber - Math.ceil(products_count / 10000))
        }
        else {
            data = await fetchProducts(pageNumber);
        }
        
    
        if (!data.length) {
            throw new Error('No items found for the given page number');
        }
    
        const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${data
                .map((item) => {
                    return `
                    <url>
                        <loc>${item.url}</loc>
                        <lastmod>${item.lastModified}</lastmod>
                    </url>`;
                })
                .join('')} 
        </urlset>`;
            
        return new Response(sitemapXML, {
            headers: { 'Content-Type': 'text/xml' },
        });
        } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
        }
  }
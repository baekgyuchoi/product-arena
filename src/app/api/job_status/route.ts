import prisma from "../../helper/db"



export async function GET(request: Request) {
    const url = new URL(request.url)
    const queryParam = url.searchParams

    const asinconcat = (queryParam.get('q') || "0")

    const comparison_article = await prisma.productComparison.findUnique({
        where: {
            asinconcat: asinconcat
        }
    })

    if (!comparison_article?.content) {
        return new Response(JSON.stringify({isJobDone: false}), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    return new Response(JSON.stringify({isJobDone: true}), {
        headers: {
            'Content-Type': 'application/json'
        }
    })


}



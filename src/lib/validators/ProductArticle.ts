import {z} from 'zod'


export const ProductArticleSchema = z.object({
    id: z.number(),
    productId: z.number(),
    asin: z.string(),
    review_description: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date()

})

//array of messages validator
export const ProductArticleArraySchema = z.array(ProductArticleSchema)

export type ProductArticle = z.infer<typeof ProductArticleSchema>

   
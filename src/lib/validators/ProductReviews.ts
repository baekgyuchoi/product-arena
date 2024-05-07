import {z} from 'zod'

export const ProductReviewSchema = z.object({
    id               : z.number(),
    productId        : z.number(),
    critical_reviews : z.string(),
    positive_reviews : z.string(),
    five_star_percent: z.number(),
    one_star         : z.number(),
    two_star         : z.number(),
    three_star       : z.number(),
    four_star        : z.number(),
    five_star        : z.number(),
    createdAt        : z.date(),
    updatedAt        : z.date(),
})

//array of messages validator
export const ProductReviewArraySchema = z.array(ProductReviewSchema)

export type ProductReview = z.infer<typeof ProductReviewSchema>


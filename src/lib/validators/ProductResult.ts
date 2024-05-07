import {z} from 'zod'

export const ProductResultSchema = z.object({
    id: z.number(),
    name: z.string(),
    link: z.string(),
    categoryId: z.number(),
    aff_link: z.string(),
    imageURL: z.string().optional(),
    rating: z.number(),
    ratings_total: z.number(),
    price: z.number(),
    recent_sales: z.string().optional(),
    asin: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    product_details: z.object({
        id: z.number(),
        productId: z.number(),
        asin: z.string(),
        description: z.string().optional(),
        keywords_list: z.string().optional(),
        size_guide_html: z.string().optional(),
        image_extra_1: z.string().optional(),
        image_extra_2: z.string().optional(),
        image_extra_3: z.string().optional(),
        feature_bullets_flat: z.string().optional(),
        a_plus_description: z.string().optional(),
        specifications_flat: z.string().optional(),
        attributes_flat: z.string().optional(),
        brand: z.string().optional(),
        related_products: z.string().optional(),
        createdAt: z.date(),
        updatedAt: z.date()
    }),
    product_rating: z.object({
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
    }),
    article: z.object({
        id: z.number(),
        productId: z.number(),
        asin: z.string(),
        review_description: z.string().optional(),
        createdAt: z.date(),
        updatedAt: z.date()
    
    })
    
    

})

//array of messages validator
export const ProductResultArraySchema = z.array(ProductResultSchema)

export type ProductResult = z.infer<typeof ProductResultSchema>


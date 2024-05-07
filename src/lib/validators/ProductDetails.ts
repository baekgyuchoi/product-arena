import {z} from 'zod'

export const ProductDetailSchema = z.object({
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

})

//array of messages validator
export const ProductDetailArraySchema = z.array(ProductDetailSchema)

export type ProductDetail = z.infer<typeof ProductDetailSchema>

   
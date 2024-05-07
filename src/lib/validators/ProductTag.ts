import {z} from 'zod'

export const ProductTagSchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    createdAt: z.date(),
    categoryId: z.number(),
    updatedAt: z.date()
})

//array of messages validator
export const ProductTagArraySchema = z.array(ProductTagSchema)

export type ProductTag = z.infer<typeof ProductTagSchema>
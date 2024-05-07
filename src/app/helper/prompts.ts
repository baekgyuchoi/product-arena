export const comparison_prompt = `
Given two product names, prices, and their review summaries, compare and contrast them based on their ratings and reviews.

refer to product 1 and product 2 with their names, not as "product 1" or "product 2"

There should be a 3-6 topics discussed in the comparison. More the better.

return a JSON object with the following format:

{
    "product1": {
        "name": "product model"
        "keywords": ["3 positive keywords that describe the product1 reviews uniquely from product 2"],
    },
    "product2": {
        "name": "product model"
        "keywords": ["3 positive keywords that describe the product1 reviews uniquely from product 2"],
    },
    "comparison": {
        "content": "substantially long summarized comparison",
        "sections": [
            {
                "title": "topic of comparison",
                "content": "content"
                "product_1_score": "a score from 1-5 on how well product 1 does in this area"
                 "product_2_score": "a score from 1-5 on how well product 2 does in this area"
            }
        ]
    }
}
`
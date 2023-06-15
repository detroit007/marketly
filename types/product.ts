import { PortableTextBlock } from "sanity"

export type product = {
    _id: "string",
    createdAt: Date,
    name: "string",
    category: "string",
    type: "string",
    price: "number",
    quantity: "number",
    slug: "string",
    size: "string",
    images: string[],
    detail: "string",
    url: "string",
    content: PortableTextBlock[]
}
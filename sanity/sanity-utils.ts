import { product } from "@/types/product";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";


export async function getProducts(): Promise<product[]> {
    return await createClient(config).fetch(
        groq`*[_type == "product"]{
            _id,
            _createdAt,
            name,
            category,
            type,
            price,
            quantity,
            "slug": slug.current,
            size,
            "images": images[].asset->url ,
            detail,
            url,
            content,
        }`
    )
}
import { getProducts } from "@/sanity/sanity-utils"

export default async function Home() {
  const products = await getProducts();
  console.log(products, "PRODUCT SS ASANITY");
  
  return (
    <div className="container mx-auto">
    <div>This is my project page</div>
        {
            products?.map(
                product=><div>
                    <p>{product.name}</p>
                    {product?.images?.map((image)=>
                        <img alt="" src={image} />
                    )}
                    </div>
            )
        }
    </div>
  )
}

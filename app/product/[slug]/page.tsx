import { getProducts } from "@/sanity/sanity-utils"
type Props = {
    params: { slug: string }
  }

export default async function Prodcut({params} : Props) {
  const products = await getProducts();
  console.log(products, "PRODUCT SS ASANITY only one");
  
  return (
    <div>
    <div>This is my project page</div>
        {params?.slug} 
        this is product
    </div>
  )
}

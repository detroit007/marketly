import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/sanity/sanity-utils"
import Link from "next/link";

type Props = {
    params: { category: string }
}

export default async function Category( { params: { category } } :  Props) {
  const product = await getProducts();
  const categoryProducts = product.filter(item=>  (category === "all" || item?.category?.toLowerCase() === category ));
  
  return (
    <div className="container mx-auto items-center">
        {
            categoryProducts?.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                
             categoryProducts?.map(
                product=>(
                    // <Link
                    //     href={`/product/${product?.slug}`}>
                    //     <div className="Allproduct-card">
                    //             <img
                    //             src={product?.images[0]}
                    //             width="250" height="270"/>
                    //         <p className="Allproduct-name">{product?.name}</p>
                    //         <p className="Allproduct-tags">{product?.type}</p>
                    //         <p className="Allproduct-price">${product?.price}</p>
                    //     </div>
                    // </Link>
                    <div className="m-2">
                    <ProductCard
                        key={product._id}
                        tittle={product.name}
                        price={product.price}
                        img={product.images[0]}
                        category={product.category}
                        slug={product.slug}
                    />
                    </div>
                )
            ) }
            </div> 
            :
            <div className="w-full h-screen flex items-center justify-center">
                No Record Found!
            </div>
        }
    </div>
  )
}

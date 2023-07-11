import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/sanity/sanity-utils"
import { ShoppingCart } from "lucide-react";
type Props = {
    params: { slug: string }
  }

export default async function Prodcut({params} : Props) {
  const product = await getProducts();
  const products =  product.filter((product) => product.slug === params.slug)[0];
  
  return (
    <main>
    <div className='flex flex-wrap gap-y-10 py-6 px-40 mt-16'>
        <div key={products._id} className="flex justify-between gap-6">
          <div>
            <img src={products.images[0]} alt={products.name} className="w-96" />
          </div>
          <div>
            <h1 className="text-2xl">{products.name}</h1>
            <h2 className="text-base text-gray-400 font-semibold">{products?.type}</h2>
            <div>
              <h3 className="text-xs mt-4 font-semibold ">SELECT SIZE</h3>
              <div className="flex gap-x-3">
                {products.size.map((item,index) => {
                  return (

                    <div key={index} className="w-6 h-6 mt-2 flex justify-center items-center duration-300 border cursor-pointer rounded-full center hover:shadow-xl" >
                      <span className="text-[10px] uppercase font-semibold text-center text-gray-600">
                        {item}
                      </span>
                    </div>

                  )
                })
                }
              </div>
              <div className="flex gap-x-3 mt-6 items-center">
                <h3 className="text-[10px] font font-semibold">Quantity:</h3>
                <Quantity />
                {/* {products.quantity} */}
              </div>
              {/* Add to Cart */}
              <div className="mt-5 flex items-center gap-x-4">
                <Button className='bg-black !text-white'><ShoppingCart className='h-4 w-4 mr-2' />Add to Cart</Button>
                <h2 className="text-2xl font-bold">${products.price}</h2>
              </div>
            </div>
          </div>

        </div>
    </div>
    <div className="container mx-auto product_description_title">
      <div className="text_background">Overview</div><h2 className="">Product Information</h2>
    </div>
    {/* <div className="flex justify-center"> */}
      <div className="flex flex-col container mx-auto mt-8">
      <div className="flex justify-between">
        <h4 className="text-[#666] w-5/6 "> PRODUCT DETAILS</h4>
        <p className="text-xl font-extralight leading-7 space-x-8 ">{products.detail}</p>
      </div>
      <div className="flex justify-between mt-8">
        <h4 className="text-[#666] w-1/4 "> PRODUCT CARE</h4>
        <div className="w-full">
          <ul className="ml-5"><li>Lorem ipsum dolor sit amet</li><li>consectetur adipiscing elit</li></ul>
          </div>
      </div>

      </div>
    {/* </div> */}

    </main>
  )
}
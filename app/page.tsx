import Hero from "@/components/Hero";
import Jewellery from "@/components/Jewellery";
import Newslatter from "@/components/NewsLatter";
import ProductList from "@/components/ProductList";
import Promotion from "@/components/Promotion";

export default async function Home(){
  
  return (
    <>
    <div className="container mx-auto">
      <Hero />
      <Promotion/>
      <ProductList />
      <Jewellery />
      <Newslatter />
  </div>
    </>
  )
}

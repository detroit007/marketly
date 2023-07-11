import ProductCard from '@/components/ProductCard';
// import { products } from '@/ultils/mock';
import { getProducts } from "@/sanity/sanity-utils"

import React from 'react';

const ProductList = async() => {

  const productsChecks = await getProducts();


  return (
    <div className='mt-8'>
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-sm font-bold">PRODUCTS</p>
        <h3 className="text-3xl text-gray-800 font-bold">Check What We Have</h3>
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-evenly mt-8 md:mt-16 p-4 md:p-0'>
        {productsChecks.slice(0,3).map((products) => (
          <ProductCard
            key={products._id}
            tittle={products.name}
            price={products.price}
            img={products.images[0]}
            category={products.category}
            slug={products.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

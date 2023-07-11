import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from './ui/button'
import { ShoppingCart } from "lucide-react"
import Link from 'next/link'


const ProductCard = (props: {
  tittle: string,
  price: string,
  img: string,
  category: string,
  slug: string
}) => {
  return (
    <Link href={`/product/${props.slug}`}>
      <div className='mb-8 hover:scale-110 duration-300 cursor-pointer'>
        <img src={props.img} alt='product-1' className='rounded w-80' />
        <h3 className='font-bold text-lg mt-3'>{props.tittle}</h3>
        <p className='font-bold text-lg'>${props.price}</p>
        <p className='font-bold text-lg'>Category: <span className='text-base font-normal text-black capitalize'>{props.category}</span></p>
        <Button className='bg-black'><ShoppingCart className='h-4 w-4 mr-2' />Add to Cart</Button>
      </div>
    </Link>
  )
}

export default ProductCard
"use client"
import React, { useState } from "react";
import Link from "next/link";
import {FiShoppingCart} from "react-icons/fi";

export function Navbar(): JSX.Element {
    const [ search, setSearch ] = useState("")
    return (
      <div className="w-full bg-white py-8 sticky top-0 z-20">
        <div className="container mx-auto flex items-center justify-between">
          <Link href={"/"}><img src="/assets/images/dine_market_logo.webp" /></Link>
          <div className="flex">
            <div className="flex">
                <Link className="p-2 px-6 hover:bg-" href={"/female"}>
                    Female
                </Link>
                <Link className="p-2 px-6" href={"/male"}>
                    Male
                </Link>
                <Link className="p-2 px-6" href={"/kids"}>
                    Kids
                </Link>
                <Link className="p-2 px-6" href={"/all"}>
                    All Products
                </Link>
            </div>
            {/* <div>
            <input
              type="text"
              name="search"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            </div> */}
            <form className="mr-4">   
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg " placeholder="Search Mockups, Logos..." />
                  {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
              </div>
            </form>
            <FiShoppingCart size={30} />
          </div>
        </div>
      </div>
    )
  }
  
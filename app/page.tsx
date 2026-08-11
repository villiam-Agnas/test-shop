"use client"

import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { products } from "@/data/products";
import { ShopItem } from "./components/ShopItem";
import { useState } from "react";
import { productType } from "@/types/productTyps";

export default function Home() {

  const [currentSatchel, setCurrentSatchel] = useState<productType[]>([])

  const addToSatchel = (productObject: productType) => {
    setCurrentSatchel([...currentSatchel, productObject])
  }

  return (
    <div className="w-full bg-black">
      <Header satchel={currentSatchel}/>
        <div className="flex flex-wrap py-8">
          {products.map((e:productType, i) => <ShopItem key={i} product={e} updateSatchel={addToSatchel}/>)}
        </div>
      <Footer/>
    </div>
  );
}

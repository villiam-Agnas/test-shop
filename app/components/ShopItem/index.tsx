'use client'
import Image from "next/image"
import { productType } from "@/types/productTyps"

export const ShopItem = ({product, updateSatchel}:{product:productType, updateSatchel:(product:productType)=> void}) => {
  return (
    <div className="flex flex-col text-white w-1/4 justify-center items-center p-4">
      <h3 className="pb-2 text-2xl">{product.name}</h3>
      <div className="w-75">
        <Image width={300} height={300} src={product.image} alt={product.name}/>
      </div>
      <p className="h-18 pt-3 text-center">{product.description}</p>
      <div className="flex pb-2">
        <div className="pr-2">
          <Image width={35} height={35} src={`/images/coin.webp`} alt="coin"/>
        </div>
        <h4 className="text-2xl">{product.price}</h4>
      </div>
      <button className="border-white border rounded-2xl px-8 py-2 mt-2 hover:brightness-75 cursor-pointer" onClick={()=>updateSatchel(product)}>Add to Satchel</button>
    </div>
  )
}
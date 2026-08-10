'use client'
import Image from "next/image"
import { productType } from "@/types/productTyps"

export const ShopItem = ({product, updateSatchel}:{product:productType, updateSatchel:(product:productType)=> void}) => {
  return (
    <div className="flex">
      <h3 className="text-white">{product.name}</h3>
      <div className="">
        <Image width={100} height={100} src={product.image} alt={product.name}/>
      </div>
      <p className="text-white">{product.description}</p>
      <div className="">
        <h4 className=""></h4>
      </div>
      <button className="" onClick={()=>updateSatchel(product)} >Add to Satchel</button>
    </div>
  )
}
import { productType } from "@/types/productTyps"
import { Satchel } from "../Satchel"
import { useState } from "react"
import { Checkout } from "../Checkout"
import Link from "next/link"

export const Header = ({satchel, removeFromSatchel, clearSatchel}:{satchel:productType[], removeFromSatchel: (indexNumber: number)=> void, clearSatchel:()=>void}) => {

  const [satchelDisplay, setSatchelDisplay] = useState(false)
  const [checkoutDisplay, setCheckoutDisplay] = useState(false)

  const checkout = () => {
    setCheckoutDisplay(true)
    }

  const closeCheckout = () => {
    setCheckoutDisplay(false)
  }

  return (
    <div className="text-center relative bg-gray-800 p-4">
      <h1 className="text-white text-7xl p-4">Moria's Secret</h1>
      <h2 className="text-white">Digging to deep in style</h2>
      {satchel.length > 0 && <div className="absolute top-2/5 right-10">
        <div className="text-2xl text-white cursor-pointer" onClick={()=> satchelDisplay ? setSatchelDisplay(false) : setSatchelDisplay(true)}>{satchelDisplay ? "Close Satchel" : "Open Satchel"}</div>
      </div>}
      {satchelDisplay && <div className="absolute top-full right-2">
        <Satchel currentSatchel={satchel} removeFromSatchel={removeFromSatchel} checkout={checkout}/>
      </div>}
      {checkoutDisplay && <Checkout closeCheckout={closeCheckout} clearSatchel={clearSatchel}/>}
      <Link className="text-white absolute top-3 right-3 text-xl p-4" href={"/about"} >About Us</Link>
    </div>
  )
}

export default Header
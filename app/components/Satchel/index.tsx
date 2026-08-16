import Image from "next/image"
import { productType } from "@/types/productTyps"
import { Checkout } from "../Checkout"

export const Satchel = ({currentSatchel, removeFromSatchel, checkout}:{currentSatchel:productType[], removeFromSatchel: (indexNumber: number)=> void, checkout:()=> void}) => {
  
  const checkoutHandle = (e:React.MouseEvent) => {
    e.stopPropagation()
    checkout()
  }

  const handleRemoveSatchel = (index:number) => {
    removeFromSatchel(index)
  }

  let total = 0
  currentSatchel.forEach(e => total = total + e.price)
  return (
    <div className="flex flex-col bg-gray-800 border-t-2 border-white rounded-b-2xl">
      {currentSatchel.map((e:productType, i:number)=> {
        return (
          <div key={i} data-testid={`test${i}`} className="flex text-white items-center py-3">
            <div className="text-2xl pl-3 cursor-pointer" onClick={()=>handleRemoveSatchel(i)}>X</div>
            <h3 className="text-2xl px-4">{e.name}</h3>
            <div className="px-3">
              <Image width={60} height={60} src={e.image} alt={e.name} />
            </div>
            <div className="flex grow pl-4 pr-4">
              <div className="pr-2">
                <Image width={35} height={35} src={`/images/coin.webp`} alt="coin"/>
              </div>
              <h4 className="text-2xl">{e.price}</h4>
            </div>
          </div>
        )
      })}
      {total > 0 && <div className="">
        <div className="h-0.5 bg-white"></div>
        <h4 className="py-3 text-3xl text-white">Total: {total}</h4>
        <button className="mt-2 mb-4 border-white border-2 text-xl px-6 py-2 text-white rounded-xl cursor-pointer" onClick={(e)=> checkoutHandle(e)}>Checkout</button>
      </div>}
    </div>
  )
}
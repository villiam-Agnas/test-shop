import Image from "next/image"

export const ShopItem = ({name, description, url, price}:{name:string, description: string, url: string, price: number}) => {
  return (
    <div className="flex">
      <h3 className="text-white">{name}</h3>
      <div className="">
        <Image width={100} height={100} src={url} alt={name}/>
      </div>
      <p className="text-white">{description}</p>
      <div className="">
        <h4 className=""></h4>
      </div>
    </div>
  )
}
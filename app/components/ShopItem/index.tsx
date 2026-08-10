import Image from "next/image"

export const ShopItem = ({name, description, url, price}:{name:string, description: string, url: string, price: number}) => {
  return (
    <div className="">
      <h3>{name}</h3>
      <div className="">
        <Image src={url} alt={name}/>
      </div>
      <p className="">{description}</p>
      <div className="">
        <h4 className=""></h4>
      </div>
    </div>
  )
}
import Image from "next/image"

export const ShopItem = ({title, description, url, price}:{title:string, description: string, url: string, price: number}) => {
  return (
    <div className="">
      <h3>{title}</h3>
      <div className="">
        <Image src={url} alt={title}/>
      </div>
      <p className="">{description}</p>
      <div className="">
        <h4 className=""></h4>
      </div>
    </div>
  )
}
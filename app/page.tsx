import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { products } from "@/data/products";
import { ShopItem } from "./components/ShopItem";

type productType = {
  name: string, 
  description: string,
  price: number,
  image: string
}



export default function Home() {
  return (
    <div className="w-full bg-black">
      <Header />
        {products.map((e:productType, i) => <ShopItem key={i} name={name}/>)}
      <Footer/>
    </div>
  );
}

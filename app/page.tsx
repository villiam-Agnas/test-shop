import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { products } from "@/data/products";
import { ShopItem } from "./components/ShopItem";
import { productType } from "@/types/productTyps";


export default function Home() {
  return (
    <div className="w-full bg-black">
      <Header />
        {products.map((e:productType, i) => <ShopItem key={i} name={e.name} description={e.description} price={e.price} url={e.image}/>)}
      <Footer/>
    </div>
  );
}

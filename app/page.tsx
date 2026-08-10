import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { products } from "@/data/products";
import { ShopItem } from "./components/ShopItem";
import { useState } from "react";

const [currentSatchel, setCurrentSatchel] = useState(null)

const addToSatchel = (productObject: p) => {

}

export default function Home() {
  return (
    <div className="w-full bg-black">
      <Header />
        {products.map((e:productType, i:number) => <ShopItem key={i} name={}/>)}
      <Footer/>
    </div>
  );
}

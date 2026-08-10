type productType = {
  name: string, 
  description: string,
  price: number,
  image: string
}

export const products:productType[] = [
  {
    name: "Lórien Leaf Elixir",
    description: "A soothing elven potion that restores a small amount of health and stamina.",
    price: 15,
    image: "/images/products/lorien_leaf_elixir.png"
  },
  {
    name: "Lembas Bread",
    description: "Nourishing elven bread that sustains the body with a small bite.",
    price: 8,
    image: "/images/products/lembas_bread.png"
  },
  {
    name: "Elven Leaf Pendant",
    description: "A delicate pendant crafted by elven smiths, inspired by the leaves of Lórien.",
    price: 25,
    image: "/images/products/elven_leaf_pendant.png"
  },
  {
    name: "Old Toby's Pipe",
    description: "A sturdy pipe favored by hobbits for its fine leaf and hearty smoke.",
    price: 12,
    image: "/images/products/old_tobys_pipe.png"
  },
  {
    name: "Gondor Silver Tankard",
    description: "A finely crafted tankard from Gondor. Perfect for ale in any tavern.",
    price: 18,
    image: "/images/products/gondor_silver_tankard.png"
  },
  {
    name: "Ranger's Cloak",
    description: "A weathered cloak that blends with the wilds. Favored by rangers of the North.",
    price: 30,
    image: "/images/products/rangers_cloak.png"
  },
  {
    name: "Andúril Replica",
    description: "A replica of the Sword of the Heir, reforged for those who aspire to great deeds.",
    price: 120,
    image: "/images/products/anduril_replica.png"
  },
  {
    name: "Hobbit Travel Satchel",
    description: "A roomy and comfortable satchel, ideal for long journeys across Middle-earth.",
    price: 22,
    image: "/images/products/hobbit_travel_satchel.png"
  },
  {
    name: "Rohan Banner",
    description: "A proud banner of the Riddermark. Rally your companions under the mark of the Horse.",
    price: 35,
    image: "/images/products/rohan_banner.png"
  },
  {
    name: "Phial of Galadriel",
    description: "A crystal phial filled with the light of Galadriel. It shines in dark places.",
    price: 40,
    image: "/images/products/phial_of_galadriel.png"
  }
];
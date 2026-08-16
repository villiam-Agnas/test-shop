import { aboutData } from "@/data/aboutData"

export default function About() {
  return (
    <div className="w-full h-full bg-black ">
    <div className="w-full h-full bg-black ">
      <p dangerouslySetInnerHTML={{__html: aboutData[2].text}} className="text-white text-lg p-4"></p>
    </div>
    <h3 className="text-white text-center text-2xl p-4">"Not all those who wander are lost. Some of them are just deciding between two mugs."</h3>
  </div>
  )
}
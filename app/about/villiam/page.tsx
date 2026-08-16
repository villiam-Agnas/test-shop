import { aboutData } from "@/data/aboutData"

export default function Villiam() {
  return (
    <div className="w-full h-full bg-black ">
      <p dangerouslySetInnerHTML={{__html: aboutData[1].text}} className="text-white text-lg p-4"></p>
    </div>
  )
}
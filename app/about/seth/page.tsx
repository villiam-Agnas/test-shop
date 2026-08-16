import { aboutData } from "@/data/aboutData"

export default function Seth() {
  return (
    <div className="w-full h-full bg-black ">
      <p dangerouslySetInnerHTML={{__html: aboutData[0].text}} className="text-white text-lg p-4"></p>
    </div>
  )
}
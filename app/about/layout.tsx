import { AboutHeader } from "../components/AboutHeader"
import { Footer } from "../components/Footer"

export default function About({children}:{children:React.ReactNode}) {
  return (
    <main className="w-full h-full">
      <AboutHeader />
        {children}
      <Footer />
    </main>
  )
}
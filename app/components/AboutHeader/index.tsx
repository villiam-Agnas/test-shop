import Link from "next/link"

export const AboutHeader = () => {
  return (
    <div className="text-center relative bg-gray-800 p-4 flex justify-between">
      <Link href={"/"} className="text-white text-xl">Back to Home</Link>
      <h1 className="text-white text-7xl p-4">About Us</h1>
      <nav className="text-white text-xl">
        <Link className="mx-2" href={"/about/villiam"} >Villiam</Link>
        <Link className="mx-2" href={"/about/seth"} >Seth</Link>
      </nav>
    </div>
  )
}
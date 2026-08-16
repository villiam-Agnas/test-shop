import { useState, useEffect } from "react"

export const Checkout = ({closeCheckout, clearSatchel}:{closeCheckout: ()=> void, clearSatchel:()=> void}) => {

  const [error, setError] = useState("")
  const [cardNumber, setCardNumber] = useState("")

  useEffect(()=> {
    if(cardNumber === "") return
    const timer = setTimeout(()=> {
      if(cardNumber === "") {
        setError("")
      }
      if(cardNumber.length !== 16 || isNaN(Number(cardNumber))) {
        setError("Value must be a number and 16 characters.")
      } else {
        setError("")
      }
    }, 600)
    return(()=> clearTimeout(timer))
  }, [cardNumber])

  const closeCheckoutHandle = (e:React.MouseEvent) => {
    e.stopPropagation()
    closeCheckout()
  }

  const handleSubmit = () => {
    clearSatchel()
    setCardNumber("")
    closeCheckout()
  }

  return(
    <div className="fixed top-0 left-0 w-full h-full flex items-center flex-col justify-center bg-gray-950/60 backdrop-blur-md">
      <div className="absolute right-5 top-5 text-2xl text-white cursor-pointer" onClick={(e)=>closeCheckoutHandle(e)}>X</div>
      <div className="border-white border-2 rounded-xl flex p-4 ">
        <label htmlFor="cardInfo" className="text-white pr-2 text">Card Number:</label>
        <input value={cardNumber} onChange={(e)=> setCardNumber(e.target.value)} className="text-white border-white border-b" id="cardInfo" type="text"></input>
      </div>
      {error !== "" && <p className="text-red-600 text-lg mt-3">{error}</p>}
      {error === "" && cardNumber.length === 16 && <button onClick={handleSubmit} className="text-white border-white border text-lg mt-6 rounded-xl hover:brightness-80 cursor-pointer px-4 py-1">Submit</button>}
    </div>
  )
}
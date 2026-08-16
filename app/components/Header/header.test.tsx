import {render, screen} from '@testing-library/react'
import Header from '.'


describe("test that the header works", () => {

  const removeFromSatchel = () => {
    return 
  }

  const clearSatchel = () => {
    return
  }

  test("tests that header has one h1 with specific text", () => {
    render(<Header satchel={[]} clearSatchel={clearSatchel} removeFromSatchel={removeFromSatchel}/>)

    const pageTitle = screen.getByRole("heading", { level: 1, "name": /moria's Secret/i})

    expect(pageTitle).toBeInTheDocument()
  })


  test("tests that header has one h2 with specific text", () => {
    render(<Header satchel={[]} clearSatchel={clearSatchel} removeFromSatchel={removeFromSatchel}/>)

    const pageTitle = screen.getByRole("heading", { level: 2, "name": /digging to deep in style/i})

    expect(pageTitle).toBeInTheDocument()
  })

})
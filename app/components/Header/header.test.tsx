import {render, screen} from '@testing-library/react'
import Header from '.'


describe("test that the header works", () => {

  test("tests that header has one h1 with specific text", () => {
    render(<Header satchel={[]} />)

    const pageTitle = screen.getByRole("heading", { level: 1, "name": /moria's Secret/i})

    expect(pageTitle).toBeInTheDocument()
  })


  test("tests that header has one h2 with specific text", () => {
    render(<Header satchel={[]} />)

    const pageTitle = screen.getByRole("heading", { level: 2, "name": /digging to deep in style/i})

    expect(pageTitle).toBeInTheDocument()
  })

})
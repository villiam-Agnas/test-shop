import {render, screen} from '@testing-library/react'
import Header from '.'


describe("test that the header works", () => {
  
  test("there is only one h1 on the page", () => {
    render(<Header satchel={[]} />)

    const pageTitle = screen.getByRole("heading", { level: 1})

    expect(pageTitle).toBeInTheDocument()
  })

})
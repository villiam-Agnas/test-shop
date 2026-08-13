import {fireEvent, render, screen} from '@testing-library/react'
import { AddToShop } from '.'

describe("add to shop tests", () =>{

  test("tests that adding new products to list works", () => {
    render(<AddToShop />)
    const mockProduct = "banana"

    let newProducts = screen.queryAllByRole("paragraph")

    expect(newProducts).toHaveLength(0)

    const input =  screen.getByLabelText(/what should we add to our store?/!)
    const button = screen.getByRole("button", { name: "Add" })

    expect((input as HTMLInputElement).value).toBe("")

    fireEvent.change(input, { target: { value: mockProduct } })

    expect((input as HTMLInputElement).value).toBe(mockProduct)

    fireEvent.click(button)

    newProducts = screen.queryAllByRole("paragraph")

    expect(newProducts).toHaveLength(1)

  })

})
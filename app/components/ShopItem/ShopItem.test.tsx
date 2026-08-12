import { render, screen } from "@testing-library/react";
import { ShopItem } from ".";
import { products } from "@/data/products";
import { productType } from "@/types/productTyps";

describe("is shop item component rendering correctly", () => {

  test("Product name is rendering correctly", () => {
    const mockProduct = products[1]
    render(<ShopItem product={mockProduct} updateSatchel={function (product: productType): void {
      throw new Error("Function not implemented.");
    } } />)

    const productTitle = screen.getByRole("heading", { level: 3, "name": mockProduct.name})

    expect(productTitle).toBeInTheDocument
  })

  test("is the image rendering correctly", () => {

    const mockProduct = products[1]
    render(<ShopItem product={mockProduct} updateSatchel={function (product: productType): void {
      throw new Error("Function not implemented.");
    } } />)

    const productImage = screen.getByRole("img", {name: mockProduct.name})

    expect(productImage).toBeInTheDocument
    expect(productImage.getAttribute("alt")).toBe(mockProduct.name)

  })

  test("Product description is rendering correctly", () => {
    const mockProduct = products[1]
    render(<ShopItem product={mockProduct} updateSatchel={function (product: productType): void {
      throw new Error("Function not implemented.");
    } } />)

    const productDescription = screen.getByText(mockProduct.description)

    expect(productDescription).toBeInTheDocument
  })

  test("Product price is rendering correctly", () => {
    const mockProduct = products[1]
    render(<ShopItem product={mockProduct} updateSatchel={function (product: productType): void {
      throw new Error("Function not implemented.");
    } } />)

    const productPrice = screen.getByRole("heading", { level: 4, "name": mockProduct.price.toString()})

    expect(productPrice).toBeInTheDocument
  })

  test("coin image is rendering correctly", () => {
    const mockProduct = products[1]
    render(<ShopItem product={mockProduct} updateSatchel={function (product: productType): void {
      throw new Error("Function not implemented.");
    } } />)

    const coin = screen.getByAltText("coin");

    expect(coin).toBeInTheDocument();

  })

})
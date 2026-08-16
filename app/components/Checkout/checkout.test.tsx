import { fireEvent, render, screen, within } from '@testing-library/react'
import { Checkout } from '.'
import Home from '@/app/page'

describe("test that checks the functionality of the satchel", () => {
  const mockSatchel = [
    {
      name: 'mockName',
      description: "mockDescription",
      price: 2,
      image: "mockImgUrl"
    },
    {
      name: 'mockName2',
      description: "mockDescription2",
      price: 3,
      image: "mockImgUrl2"
    }
  ]

  test('test that clicking a shopItem updates the satchel', () => {
    render(<Home />)

    const satchel = screen.queryByText(/Open Satchel/)
    expect(satchel).not.toBeInTheDocument()

    const shopItem = screen.getByText(/Lembas Bread/)
    expect(shopItem).toBeInTheDocument()

    const shopItemContainer = shopItem ? shopItem.parentElement : null
    expect(shopItemContainer).toBeInTheDocument()

    if (shopItemContainer) {

      const addToSatchelButton = within(shopItemContainer).getByRole('button')

      fireEvent.click(addToSatchelButton)

      const openSatchel = screen.getByText(/Open Satchel/)
      expect(openSatchel).toBeInTheDocument()

      fireEvent.click(openSatchel)

      const checkout = screen.getAllByRole
    }
  })
})
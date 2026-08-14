import {fireEvent, render, screen, within} from '@testing-library/react'
import Home from '@/app/page'
import { Satchel } from '.'

describe("test that checks the functionality of the satchel", ()=> {
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

  test('test that the first image is rendering', ()=> {
    render(<Satchel currentSatchel={mockSatchel}/>)

    const mockSatchelImage1 = screen.getByAltText('mockName')
    expect(mockSatchelImage1).toBeInTheDocument()
  })

  test('test that the second image is rendering', ()=> {
    render(<Satchel currentSatchel={mockSatchel}/>)

    const mockSatchelImage2 = screen.getByAltText('mockName2')
    expect(mockSatchelImage2).toBeInTheDocument()
  })
  
  test('test the total price number', ()=> {
    render(<Satchel currentSatchel={mockSatchel}/>)

    const totalMockPrice = screen.queryByText(/Total: 5/)
    expect(totalMockPrice).toBeInTheDocument()
  })

  test('test that if nothing is passed, the total does not render', ()=> {
    render(<Satchel currentSatchel={[]}/>)

    const totalMockPrice = screen.queryByText(/Total:/)
    expect(totalMockPrice).not.toBeInTheDocument()
  })

  test('test that clicking a shopItem updates the satchel', ()=> {
    render(<Home />)

    const satchel = screen.queryByText(/Open Satchel/)
    expect(satchel).not.toBeInTheDocument()

    const shopItem= screen.getByText(/Lembas Bread/)
    expect(shopItem).toBeInTheDocument()

    const shopItemContainer = shopItem ? shopItem.parentElement : null
    expect(shopItemContainer).toBeInTheDocument()

    if(shopItemContainer) {

      const addToSatchelButton = within(shopItemContainer).getByRole('button')

      fireEvent.click(addToSatchelButton)

      const openSatchel = screen.getByText(/Open Satchel/)
      expect(openSatchel).toBeInTheDocument()

      fireEvent.click(openSatchel)

      const closeSatchel = screen.getByText(/Close Satchel/)
      expect(closeSatchel).toBeInTheDocument()

      const lembasBreadOccurence = screen.getAllByText(/Lembas Bread/)
      expect(lembasBreadOccurence).toHaveLength(2)
    }
  })

  test('test that the x button removes something from the satchel', ()=> {
    render(<Home />)

    const satchel = screen.queryByText(/Open Satchel/)
    expect(satchel).not.toBeInTheDocument()

    const shopItem= screen.getByText(/Lembas Bread/)
    expect(shopItem).toBeInTheDocument()

    const shopItemContainer = shopItem ? shopItem.parentElement : null
    expect(shopItemContainer).toBeInTheDocument()

    if(shopItemContainer) {

      const addToSatchelButton = within(shopItemContainer).getByRole('button')

      fireEvent.click(addToSatchelButton)

      const openSatchel = screen.getByText(/Open Satchel/)
      expect(openSatchel).toBeInTheDocument()

      fireEvent.click(openSatchel)

      const closeSatchel = screen.getByText(/Close Satchel/)
      expect(closeSatchel).toBeInTheDocument()

      const lembasBreadOccurence = screen.getByTestId('test0')
      expect(lembasBreadOccurence).toBeInTheDocument()

      const removeItem = within(lembasBreadOccurence).getByText(/X/)
      expect(removeItem).toBeInTheDocument()

      fireEvent.click(removeItem)

      const lembasBreadGone = screen.queryByTestId('test0')
      expect(lembasBreadGone).not.toBeInTheDocument()
    }
  })
})
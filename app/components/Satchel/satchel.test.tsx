import {render, screen} from '@testing-library/react'
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
})
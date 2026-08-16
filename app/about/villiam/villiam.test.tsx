import {render, screen} from '@testing-library/react'
import Villiam from './page'

describe("test that checks the functionality of villiams about page", ()=> {
  
  test('test that villiams about info is rendering', ()=> {
    render(<Villiam />)

    const textSnippet = screen.queryByText(/Villiam was born, as far as anyone can tell, sometime/)
    expect(textSnippet).toBeInTheDocument()
  })
})
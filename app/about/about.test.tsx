import {render, screen} from '@testing-library/react'
import About from './page'

describe("test that checks the functionality of the main about page text", ()=> {

  test('test that the about info is rendering', ()=> {
    render(<About />)

    const textSnippet = screen.queryByText(/Somewhere between the Shire and your doorstep/)
    expect(textSnippet).toBeInTheDocument()
  })
})
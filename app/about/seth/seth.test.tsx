import {render, screen} from '@testing-library/react'
import Seth from './page'

describe("test that checks the functionality of seths about page", ()=> {

  test('test that seths about info is rendering', ()=> {
    render(<Seth />)

    const textSnippet = screen.queryByText(/Seth owns a 10-liter aquarium, which is, by any reasonable/)
    expect(textSnippet).toBeInTheDocument()
  })
})
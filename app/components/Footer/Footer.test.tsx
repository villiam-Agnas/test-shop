import { Footer } from ".";
import {render, screen} from '@testing-library/react'

describe('test the footer', ()=> {
  test('check if the footer text exists', ()=> {
    render(<Footer />)

    const footerComponent = screen.getByRole('heading', {level: 2, name: /© Moria's Secret/i})
    expect(footerComponent).toBeInTheDocument()
  })
})
import {render, screen} from '@testing-library/react'
import { AboutHeader } from '.'

describe("test that checks the functionality of the about page header", ()=> {

  test('test that the home link is rendering', ()=> {
    render(<AboutHeader />)

    const homeLink = screen.getByRole("link", {name: /Back to Home/})
    expect(homeLink).toBeInTheDocument()
  })

  test('test that the link for villiam is rendering', ()=> {
    render(<AboutHeader />)

    const villiamLink = screen.getByRole("link", {name: /Villiam/})
    expect(villiamLink).toBeInTheDocument()
  })

  test('test that the link for seth is rendering', ()=> {
    render(<AboutHeader />)

    const sethLink = screen.getByRole("link", {name: /Seth/})
    expect(sethLink).toBeInTheDocument()
  })
})
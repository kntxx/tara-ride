import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/Footer'

describe('Footer Component', () => {
  it('renders footer with copyright', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    
    expect(screen.getByText(/Tito Ride/i)).toBeInTheDocument()
    expect(screen.getByText(/Tito Itlog/i)).toBeInTheDocument()
  })

  it('displays current year', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('renders social media links', () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    
    const links = container.querySelectorAll('a')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })
})

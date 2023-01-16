import React from 'react'
import { render, screen } from '@testing-library/react'

import { Header } from './Header'

describe('Header', () => {
  test('renders title', () => {
    render(<Header />)

    expect(screen.getByText('Where in the world?')).toBeInTheDocument()
  })
})

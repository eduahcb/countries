import React from 'react'

import { render, screen } from '@testing-library/react'

import App from './App'

describe('Test', () => {
  test('eai', () => {
    render(<App />)

    expect(screen.getByText('ok')).toBeInTheDocument()
  })
})

import React from 'react'
import { render } from '@testing-library/react'

import { GlobalStyle } from './GlobalStyle'

describe('GlobalStyle', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<GlobalStyle />)

    expect(asFragment()).toMatchSnapshot()
  })
})

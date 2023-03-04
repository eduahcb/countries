import React from 'react'
import { render } from '@testing-library/react'

import { Grid } from './Grid'

describe('Grid', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(
      <Grid>
        <div>test</div>
      </Grid>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should match snapshot with gap prop', () => {
    const { asFragment } = render(
      <Grid gap={12}>
        <div>test</div>
      </Grid>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test.each([
    ['sm', 12],
    ['md', 6],
    ['lg', 4],
    ['xl', 3]
  ])('should match snapshot with %s', (size, value) => {
    const props = {
      [size]: value
    }

    const { asFragment } = render(
      <Grid>
        <Grid.Column {...props}>test</Grid.Column>
      </Grid>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})

import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Card } from './Card'

describe('Card', () => {
  userEvent.setup()

  test('should render children', () => {
    render(
      <Card>
        <p>this is a content</p>
      </Card>
    )

    expect(screen.getByText('this is a content')).toBeInTheDocument()
  })

  test('should call onClick prop when is a clickable', async () => {
    const onClick = vi.fn()

    render(
      <Card clickable onClick={onClick}>
        <p>this is a content</p>
      </Card>
    )

    const card = screen.getByRole('button')

    await userEvent.click(card)

    expect(onClick).toHaveBeenCalled()
  })

  test("shouldn't call onClick prop when it's not clickable", async () => {
    const onClick = vi.fn()

    render(
      <Card onClick={onClick}>
        <p>this is a content</p>
      </Card>
    )

    const card: any = screen.queryByRole('button')

    await userEvent.click(card)

    expect(onClick).not.toHaveBeenCalled()
  })
})

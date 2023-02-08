import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Search } from './Search'

describe('Search', () => {
  userEvent.setup()

  describe('when is uncontrolled', () => {
    test('should render default value', () => {
      render(<Search defaultValue='my default value' />)

      expect(screen.getByDisplayValue('my default value'))
    })

    test('change input value', async () => {
      render(<Search name='mySearch' placeholder='search' />)

      const searchInput = screen.getByPlaceholderText('search')

      await userEvent.type(searchInput, 'new state')

      expect(screen.getByDisplayValue('new state')).toBeInTheDocument()
    })
  })

  describe('when is controlled', () => {
    test('should render value', () => {
      render(<Search value='initial value' />)

      expect(screen.getByDisplayValue('initial value'))
    })

    test('should call onChange function', async () => {
      const onChange = vi.fn()

      render(<Search placeholder='search' value='' onChange={onChange}/>)

      const searchInput = screen.getByPlaceholderText('search')

      await userEvent.type(searchInput, 'new value')

      expect(onChange).toBeCalled()
    })
  })

  describe('actions', () => {
    test('should clear the search input', async () => {
      render(<Search placeholder='search' defaultValue='my value'/>)

      expect(screen.getByDisplayValue('my value')).toBeInTheDocument()

      const closeIcon = screen.getAllByRole('button')[1]

      await userEvent.click(closeIcon)

      expect(screen.queryByDisplayValue('my value')).not.toBeInTheDocument()
    })

    test('should call onClear prop', async () => {
      const onClear = vi.fn()

      render(<Search placeholder='search' defaultValue='my value' onClear={onClear}/>)

      expect(screen.getByDisplayValue('my value')).toBeInTheDocument()

      const closeIcon = screen.getAllByRole('button')[1]

      await userEvent.click(closeIcon)

      expect(onClear).toHaveBeenCalled()
    })
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Select } from './Select'

describe('Select', () => {
  userEvent.setup()

  describe('when is uncontrolled', () => {
    test('should render default value', () => {
      render(
        <Select placeholder="Select" value="01">
          <Select.Item value="01">Item - 1</Select.Item>
          <Select.Item value="02">Item - 2</Select.Item>
        </Select>
      )

      expect(screen.getByText('Item - 1')).toBeInTheDocument()
    })

    test('should change input value', async () => {
      render(
        <Select placeholder="Select">
          <Select.Item value="01">Item - 1</Select.Item>
          <Select.Item value="02">Item - 2</Select.Item>
        </Select>
      )

      const select = screen.getByText('Select')

      await userEvent.click(select)

      const selectedOption = screen.getByRole('option', {
        name: 'Item - 1'
      })

      await userEvent.click(selectedOption)

      expect(screen.queryByText('Select')).not.toBeInTheDocument()

      expect(screen.getByText('Item - 1')).toBeInTheDocument()
    })

    test('select the same value, the dropdown keep it open', async () => {
      render(
        <Select placeholder="Select" value="01">
          <Select.Item value="01">Item - 1</Select.Item>
          <Select.Item value="02">Item - 2</Select.Item>
        </Select>
      )

      const select = screen.getByText('Item - 1')

      await userEvent.click(select)

      const selectedOption = screen.getByRole('option', {
        name: 'Item - 1'
      })

      await userEvent.click(selectedOption)

      expect(screen.queryByText('Select')).not.toBeInTheDocument()

      const options = screen.getAllByRole('option')

      expect(options).toHaveLength(2)
    })
  })

  describe('when is controlled', () => {
    test('should render value', () => {
      render(
        <Select placeholder='Select' value="01">
          <Select.Item value="01">Item - 1</Select.Item>
          <Select.Item value="02">Item - 2</Select.Item>
        </Select>
      )

      expect(screen.getByText('Item - 1'))
    })

    test('should call onChange prop', async () => {
      const onChange = vi.fn()

      render(
        <Select placeholder='Select' value="01" onChange={onChange}>
          <Select.Item value="01">Item - 1</Select.Item>
          <Select.Item value="02">Item - 2</Select.Item>
        </Select>
      )

      const select = screen.getByText('Item - 1')

      await userEvent.click(select)

      const selectedOption = screen.getByRole('option', {
        name: 'Item - 2'
      })

      await userEvent.click(selectedOption)

      expect(onChange).toBeCalled()
    })

    test('should call onOpen prop', async () => {
      const onOpen = vi.fn()

      render(
        <Select placeholder='Select' value='' onOpen={onOpen}>
          <Select.Item value="01">Item - 1</Select.Item>
          <Select.Item value="02">Item - 2</Select.Item>
        </Select>
      )

      const select = screen.getByText('Select')

      await userEvent.click(select)

      const selectedOption = screen.getByRole('option', {
        name: 'Item - 2'
      })

      await userEvent.click(selectedOption)

      expect(onOpen).toBeCalled()
    })

    test('should call onClose prop', async () => {
      const onClose = vi.fn()

      render(
        <Select placeholder='Select' open value='' onClose={onClose}>
          <Select.Item value="01">Item - 1</Select.Item>
          <Select.Item value="02">Item - 2</Select.Item>
        </Select>
      )

      const selectedOption = screen.getByRole('option', {
        name: 'Item - 2'
      })

      await userEvent.click(selectedOption)

      expect(onClose).toBeCalled()
    })
  })
})

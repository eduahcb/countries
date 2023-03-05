import React, { ReactElement, useState } from 'react'

import { Select } from 'components/atoms/Select'

export default {
  title: 'Components / Select'
}

export const usage = (): ReactElement => (
  <Select placeholder='Select'>
    <Select.Item value="01">Item 1</Select.Item>
    <Select.Item value="02">Item 2</Select.Item>
    <Select.Item value="03">Item 3</Select.Item>
  </Select>
)

export const Controlled = (): ReactElement => {
  const [value, setValue] = useState('')
  const [isOpen, setOpen] = useState(false)

  return (
    <Select
      placeholder='Select'
      value={value}
      open={isOpen}
      onOpen={ () => { setOpen(true) }}
      onClose={() => { setOpen(false) }}
      onChange={ (event, value) => { setValue(value) }}
    >
      <Select.Item value="01">Item 1</Select.Item>
      <Select.Item value="02">Item 2</Select.Item>
      <Select.Item value="03">Item 3</Select.Item>
    </Select>
  )
}

export const withDefaultValue = (): ReactElement => (
  <Select placeholder='Select' defaultValue='01'>
    <Select.Item value="01">Item 1</Select.Item>
    <Select.Item value="02">Item 2</Select.Item>
    <Select.Item value="03">Item 3</Select.Item>
  </Select>
)

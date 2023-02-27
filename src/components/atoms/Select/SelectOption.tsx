import styled from 'styled-components'
import React, { ReactElement, ReactNode } from 'react'

type SelectOptionProp = {
  value: any
  children: ReactNode
}

const Root = styled.div<{ value: any }>`
  height: inherit;

  padding: 8px 12px;

  &:hover {
    background-color: #e9ebed;
  }
`

export const SelectOption = ({ children, value, ...rest }: SelectOptionProp): ReactElement => {
  return (
    <Root role="option" value={value} {...rest}>{ children }</Root>
  )
}

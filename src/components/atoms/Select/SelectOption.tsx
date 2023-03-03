import styled from 'styled-components'
import React, { ReactElement, ReactNode } from 'react'

type SelectOptionProp = {
  value: any
  children: ReactNode
}

const Root = styled.div<{ value: any }>`
  height: inherit;

  padding: 8px 12px;
  font-size: 0.875rem;

  &:hover {
    background-color: #e9ebed;
  }

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`

export const SelectOption = ({ children, value, ...rest }: SelectOptionProp): ReactElement => {
  return (
    <Root role="option" value={value} {...rest}>{ children }</Root>
  )
}

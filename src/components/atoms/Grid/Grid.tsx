import React, { HTMLAttributes, ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { GridColumn } from './GridColumn'

const Root = styled.div<GridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  
  ${
    props => props.gap && css`
      gap: ${props.gap}px;
    `
  }
`

type GridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  gap?: number
}

const Grid = ({ children, gap, ...rest }: GridProps): ReactElement => {
  return (
    <Root gap={gap} {...rest}>{ children }</Root>
  )
}

Grid.Column = GridColumn

export { Grid }

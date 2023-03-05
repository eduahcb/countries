import React, { ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'

const Root = styled.div<GridColumnProps>`
  width: 100%;
  grid-column: span ${props => props.xs ?? 12};

  ${
    props => props.sm && css`
      @media (min-width: 640px) {
        grid-column: span ${props.sm};
      }
    `
  }

  ${
    props => props.md && css`
      @media (min-width: 768px) {
        grid-column: span ${props.md};
      }
    `
  }

  ${
    props => props.lg && css`
      @media (min-width: 1024px) {
        grid-column: span ${props.lg};
      }
    `
  }

  ${
    props => props.xl && css`
      @media (min-width: 1440px) {
        grid-column: span ${props.xl};
      }
    `
  }
`

type GridColumnProps = {
  children: ReactNode
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export const GridColumn = ({ children, xs, sm, md, lg, xl }: GridColumnProps): ReactElement => {
  return (
    <Root xs={xs} sm={sm} md={md} lg={lg} xl={xl}>{ children }</Root>
  )
}

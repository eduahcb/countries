import styled, { css } from 'styled-components'

import { CardProps } from './Card'

export const Root = styled.div<CardProps>`
  background-color: var(--elements);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  padding: 24px;


  ${
    props => props.clickable && css`
      &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4)
      }
    `
  }

  cursor: ${props => props.clickable ? 'pointer' : 'default'};
`

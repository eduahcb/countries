import React, { ReactElement, ReactNode, HTMLAttributes, SyntheticEvent } from 'react'

import { isFunction } from 'helpers/isFunction'

import { Root } from './style'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  clickable?: boolean
  onClick?: (event: SyntheticEvent) => void
}

export const Card = ({ children, clickable, onClick: onClickProp, ...rest }: CardProps): ReactElement => {
  const handleOnClick = (event: SyntheticEvent): void => {
    onClickProp && isFunction(onClickProp) && onClickProp(event)
  }

  return clickable
    ? (
        <Root clickable role="button" onClick={handleOnClick} {...rest}>{ children }</Root>
      )
    : (
        <Root onClick={handleOnClick} {...rest}>{ children }</Root>
      )
}

import React, { forwardRef, InputHTMLAttributes, ChangeEvent, useRef } from 'react'

import { Input, Root, ImageContainer, CloseContainer } from './style'

import { ReactComponent as SearchIcon } from './assets/search.svg'
import { ReactComponent as CloseIcon } from './assets/close.svg'

import { useCombinedRefs, useControlled } from 'hooks'
import { isFunction } from 'helpers/isFunction'

type SearchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  value?: string
  defaultValue?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(({
  value: valueProp,
  onChange: onChangeProp,
  onClear,
  defaultValue,
  placeholder,
  ...rest
}: SearchProps, ref) => {
  const [value, setValue] = useControlled({ value: valueProp, defaultValue })
  const inputRef = useRef(null)

  const combineRef = useCombinedRefs(ref, inputRef)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChangeProp && isFunction(onChangeProp) && onChangeProp(event)

    setValue(event.target.value)
  }

  const handleOnClear = (): void => {
    onClear && isFunction(onClear) && onClear()

    setValue('')
  }

  const handleOnClick = (): void => {
    combineRef.current?.focus()
  }

  return (
    <Root onClick={handleOnClick} {...rest}>
      <ImageContainer role="button" onClick={handleOnClick}>
        <SearchIcon name='searchIcon'/>
      </ImageContainer>
      <Input type="search" value={value} onChange={handleOnChange} ref={combineRef} placeholder={placeholder} />
      {
        !!value && (
        <CloseContainer role="button" onClick={handleOnClear}>
          <CloseIcon className="closeIcon" />
        </CloseContainer>
        )
      }
    </Root>
  )
})

Search.displayName = 'Search'

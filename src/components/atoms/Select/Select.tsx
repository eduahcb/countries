import React, { useRef, ReactElement, ReactNode, forwardRef, ForwardRefExoticComponent, RefAttributes, SyntheticEvent } from 'react'

import { SelectOption } from './SelectOption'
import { ReactComponent as ArrowDown } from './assets/arrow_down.svg'

import { Root, DisplayContainer, DropdownContainer, DropdownList, Input } from './style'

import { useCombinedRefs, useControlled, useOnClickOutside } from 'hooks'
import { isFunction } from 'helpers/isFunction'

type SelectProps = {
  children: ReactNode
  value?: string
  defaultValue?: string
  open?: boolean
  placeholder?: string
  onChange?: (event: SyntheticEvent, value: any) => void
  onClose?: (event: SyntheticEvent) => void
  onOpen?: (event: SyntheticEvent) => void
}

type ComponentType = ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLInputElement>> & {
  Item: typeof SelectOption
}

const Select = forwardRef<HTMLInputElement, SelectProps>(({
  children,
  value: valueProp,
  defaultValue,
  open: openProp,
  placeholder,
  onChange,
  onOpen,
  onClose
}: SelectProps, ref): ReactElement => {
  const [stateValue, setStateValue] = useControlled({ value: valueProp, defaultValue })
  const [stateOpen, setStateOpen] = useControlled({ value: openProp, defaultValue: false })

  const combineRef = useCombinedRefs(ref)

  const inputRef = useRef<HTMLDivElement>(null)
  const displayValue = useRef('')

  useOnClickOutside(inputRef, () => { setStateOpen(false) })

  const childrenArray = React.Children.toArray(children)

  const items = childrenArray.map((child: any, index: number) => {
    const { value, children } = child.props

    if (stateValue === String(value)) {
      displayValue.current = children
    }

    return React.cloneElement(child, {
      value: undefined,
      key: `item-${index}`,
      'data-value': value,
      onClick: (event: SyntheticEvent) => { handleOnOptionClick(child, event) }
    }, children)
  })

  const toggleDropDown = (event: any, value?: boolean): void => {
    if (stateOpen && isFunction(onClose)) onClose?.(event)

    else if (onOpen && isFunction(onOpen)) onOpen(event)

    setStateOpen((prevState: boolean) => value ?? !prevState)
  }

  const handleOnOptionClick = (child: ReactElement, event: SyntheticEvent): void => {
    event.stopPropagation()

    const { value } = child.props

    if (stateValue === value) return

    onChange && isFunction(onChange) && onChange(event, value)

    setStateValue(value)
    toggleDropDown(event, false)
  }

  const handleOnClick = (event: SyntheticEvent): void => {
    event.stopPropagation()
    toggleDropDown(event)
  }

  return (
    <Root role="button" onClick={handleOnClick} ref={inputRef}>
      <DisplayContainer>
        <span>{ displayValue.current ? displayValue.current : placeholder}</span>
        <ArrowDown />
      </DisplayContainer>
      <Input value={stateValue} onChange={() => {}} ref={combineRef} />
      {
        stateOpen && (
          <DropdownContainer>
            <DropdownList role="listbox">
              { items }
            </DropdownList>
          </DropdownContainer>
        )
      }
    </Root>
  )
}) as ComponentType

Select.displayName = 'Select'

Select.Item = SelectOption

export { Select }

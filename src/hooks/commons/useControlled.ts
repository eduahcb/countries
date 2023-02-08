import { useCallback, useState, useRef } from 'react'

type useControlledProps = {
  value?: any
  defaultValue?: any
}

export const useControlled = ({ value: valueProp, defaultValue }: useControlledProps): [any, (valeu: any) => void] => {
  const [stateValue, setStateValue] = useState(defaultValue ?? '')

  const { current: isControlled } = useRef(valueProp !== undefined)

  const value = isControlled ? valueProp : stateValue

  const setDefaultValue = useCallback((valueResponse: any) => {
    if (!isControlled) { setStateValue(valueResponse) }
  }, [isControlled, setStateValue])

  return [value, setDefaultValue]
}

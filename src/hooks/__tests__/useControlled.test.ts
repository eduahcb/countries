import { renderHook, act } from '@testing-library/react'

import { useControlled } from 'hooks/commons/useControlled'

describe('useControlled', () => {
  test('should has correctly defaultValue and is uncontrolled component', () => {
    const { result } = renderHook(() => useControlled({ defaultValue: 'Eduardo' }))

    const [value] = result.current

    expect(value).toBe('Eduardo')
  })

  test('should change uncontrolled state', async () => {
    const { result } = renderHook(() => useControlled({ }))

    const [value, setValue] = result.current

    expect(value).toBe('')

    await act(async () => {
      setValue('Eduardo')
    })

    const [newValue] = result.current

    expect(newValue).toBe('Eduardo')
  })

  test('should return correctly value controlled component', async () => {
    const { result } = renderHook(() => useControlled({ value: '' }))

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setValue] = result.current

    await act(async () => {
      setValue('Eduardo')
    })

    const [newValue] = result.current

    expect(newValue).toBe('')
  })
})

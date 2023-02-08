import { isFunction } from 'helpers/isFunction'

describe('isFunction', () => {
  test('should return false', () => {
    const myString = 'this is a string'

    const result = isFunction(myString)

    expect(result).toBeFalsy()
  })

  test('should return true', () => {
    const myFunction = (): void => {}

    const result = isFunction(myFunction)

    expect(result).toBeTruthy()
  })
})

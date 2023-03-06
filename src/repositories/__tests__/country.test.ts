import { ClientInMemory } from '../in-memory/client'
import { CountryRepository } from '../country'

import mockedCountries from 'fake-api/fixtures/countries.json'

describe('CountryRepository', () => {
  let client: ClientInMemory

  beforeAll(() => {
    client = new ClientInMemory()
  })

  afterEach(() => {
    vi.spyOn(client, 'get').mockClear()
  })

  describe('getAll', () => {
    test('should return a empty array', async () => {
      vi.spyOn(client, 'get').mockResolvedValue({ data: [], status: 200 })

      const countryRepository = new CountryRepository(client)

      const countries = await countryRepository.getAll()

      expect(countries).toStrictEqual([])
    })

    test('should return an array with one user', async () => {
      vi.spyOn(client, 'get').mockResolvedValue({
        data: mockedCountries.slice(0, 1),
        status: 200
      })

      const countryRepository = new CountryRepository(client)

      const countries = await countryRepository.getAll()

      expect(countries).toStrictEqual([{
        name: 'Gambia',
        population: 2416664,
        region: 'Africa',
        capital: ['Banjul']
      }])
    })

    test('throw a error instance of Error', async () => {
      vi.spyOn(client, 'get').mockRejectedValue(new Error('this is a error'))

      const countryRepository = new CountryRepository(client)

      const handle = async (): Promise<any> => await countryRepository.getAll()

      await expect(handle).rejects.toThrowError('this is a error')
    })
  })
})

import { HttpClient } from 'http-client/http'

import { Country } from 'types/country'

export class CountryRepository {
  private readonly client: HttpClient

  constructor (client: HttpClient) {
    this.client = client
  }

  async getAll (): Promise<Country[]> {
    try {
      const { data } = await this.client.get('/all')

      const countries: Country[] = data.map((country: any) => {
        return {
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital,
          flag: country.flags.svg
        }
      })

      return await Promise.resolve<Country[]>(countries)
    } catch (error: any) {
      return await Promise.reject(new Error(error))
    }
  }
}

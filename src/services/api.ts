import { AxiosClient } from 'http-client/axios'
import { CountryRepository } from 'repositories'

const url = import.meta.env.VITE_API_URL
const client = new AxiosClient(url)

const countryRepository = new CountryRepository(client)

export const api = {
  country: countryRepository
}

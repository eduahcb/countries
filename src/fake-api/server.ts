import { createServer, Server, Model } from 'miragejs'

import countriesJSON from './fixtures/countries.json'

export const fakeApi = (environment: 'development' | 'test' = 'development'): Server => {
  return createServer({
    environment,

    models: {
      countries: Model
    },

    fixtures: {
      countries: countriesJSON
    },
    seeds (server) {
      server.loadFixtures()
    },

    routes () {
      this.get('/', (schema) => {
        return schema.all('countries').models
      })
    }
  })
}

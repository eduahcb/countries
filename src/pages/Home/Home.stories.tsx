import React, { ReactElement } from 'react'

import { Home } from 'pages/Home'
import { Country } from 'types/country'

import countries from 'fixtures/countries.json'

export default {
  title: 'Pages / Home'
}

export const usage = (): ReactElement => (
  <Home countries={countries as Country[]} loading={false} error={{ message: '' }}/>
)

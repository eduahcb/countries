import React, { ReactElement, useEffect, useState } from 'react'

import { Home as HomePage } from 'pages/Home'
import { Country } from 'types/country'
import { api } from 'services/api'

export const Home = (): ReactElement => {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    message: ''
  })

  useEffect(() => {
    setLoading(true)
    api.country.getAll()
      .then(data => {
        setCountries(data)
      })
      .catch(() => {
        setError({ message: 'Unable to load countries' })
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <HomePage
      countries={countries}
      loading={loading}
      error={error}
    />
  )
}

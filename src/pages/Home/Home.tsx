import React, { ReactElement } from 'react'
import { PropagateLoader } from 'react-spinners'

import { Grid } from 'components/atoms/Grid'
import { Select } from 'components/atoms/Select'

import { Country } from 'types/country'

import { CountryCard } from './CountryCard'
import { Main, Search, CountryGrid, SpinnerContainer, ErrorContainer } from './style'

type HomeProps = {
  countries: Country[]
  loading: boolean
  error: { message: string }
}

export const Home = ({ countries, loading, error }: HomeProps): ReactElement => {
  const handleCountryRender = (): any => {
    if (error.message) {
      return (
        <ErrorContainer>
          <p>{error.message}</p>
        </ErrorContainer>
      )
    }

    if (loading) {
      return (
        <SpinnerContainer className='ok'>
          <PropagateLoader color="#36d7b7" />
        </SpinnerContainer>
      )
    }

    return (
      <CountryGrid>
        {
          countries.map(country => (
            <Grid.Column key={country.name} xs={12} sm={6} lg={4} xl={3}>
              <CountryCard country={country} />
            </Grid.Column>
          ))
        }
      </CountryGrid>
    )
  }

  return (
    <>
      <Main>
        <Grid gap={24}>
          <Grid.Column xs={12} md={8} lg={10}>
            <Search
              placeholder="Search for a country..."
            />
          </Grid.Column>

          <Grid.Column xs={6} md={4} lg={2}>
              <Select placeholder='Filter by Region'>
                <Select.Item value="01">Item 1</Select.Item>
                <Select.Item value="02">Item 2</Select.Item>
                <Select.Item value="03">Item 3</Select.Item>
              </Select>
          </Grid.Column>
        </Grid>

        {handleCountryRender()}

      </Main>
    </>
  )
}

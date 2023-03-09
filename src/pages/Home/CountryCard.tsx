import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Card } from 'components/atoms/Card'
import { Country } from 'types/country'

const Root = styled(Card)`
  padding: 0;
`

const Flag = styled.div<{ image: string }>`
  height: 150px;

  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center center;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const Content = styled.div`
  height: 180px;
  padding: 2em;

  h3 {
    margin-bottom: 1em;
  } 
`

const Info = styled.p`
  margin-bottom: .5em;
  font-weight: 500;

  span {
    font-weight: 200;
  }
`

type CountryCardProps = {
  country: Country
}

export const CountryCard = ({ country }: CountryCardProps): ReactElement => {
  return (
    <Root>
      <Flag image={country.flag}>
      </Flag>
      <Content>
          <h3>{country.name}</h3>

          <Info>Population: <span>{country.population}</span></Info>
          <Info>Region: <span>{country.region}</span></Info>
          <Info>Capital: <span>{country.capital?.join(', ')}</span></Info>
      </Content>
    </Root>

  )
}

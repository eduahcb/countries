import React, { ReactElement } from 'react'

import { Header } from 'components/atoms/Header'
import { Grid } from 'components/atoms/Grid'
import { Select } from 'components/atoms/Select'

import { Country } from './Country'

import { Main, Search, Container } from './style'

export const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Main>
        <Grid gap={24}>
          <Grid.Column md={8} lg={10}>
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

        <Grid gap={12}>
          <Grid.Column sm={6} lg={4} xl={3}>
            <Container>
                <Country />
            </Container>
          </Grid.Column>
        </Grid>
      </Main>
    </>
  )
}

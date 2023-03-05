import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Header } from 'components/atoms/Header'
import { Grid } from 'components/atoms/Grid'
import { Search } from 'components/atoms/Search'
import { Select } from 'components/atoms/Select'
import { Card } from 'components/atoms/Card'

const Main = styled.main`
  padding: 2em 1em;
  max-width: 1440px;

  @media (min-width: 640px) {
    padding: 2em 1.5em;
  }
  
  @media (min-width: 768px) {
    padding: 2em 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2em 2.1em;
  }

  @media (min-width: 1440px) {
    margin: auto;
    padding: 2em 0;
  }
`

const StyledSearch = styled(Search)`
  @media (min-width: 1024px) {
    width: 50%;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Country = styled(Card)`
  padding: 0;
`

const Flag = styled.div`
  height: 200px;

  img {
    height: 100%;
    max-width: 100%;
  }
`

const Content = styled.div`
  padding: 2.1em;
`

export const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Main>
        <Grid gap={24}>
          <Grid.Column md={8} lg={10}>
            <StyledSearch
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

        <Grid>
          <Grid.Column>
            <Container>
                <Country>
                  <Flag>
                    <img src="https://flagcdn.com/br.svg" alt="" />
                  </Flag>
                  <Content>
                      <h2>Brazil</h2>
                  </Content>
                </Country>
            </Container>
          </Grid.Column>
        </Grid>
      </Main>
    </>
  )
}

import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Card } from 'components/atoms/Card'

const Root = styled(Card)`
  padding: 0;
`

const Flag = styled.div`
  height: 200px;

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
    height: 100%;
    max-width: 100%;
  }
`

const Content = styled.div`
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

export const Country = (): ReactElement => {
  return (
    <Root>
      <Flag>
        <img src="https://flagcdn.com/br.svg" alt="" />
      </Flag>
      <Content>
          <h3>Brazil</h3>

          <Info>Population: <span>2323232</span></Info>
          <Info>Region: <span>Americas</span></Info>
          <Info>Capital: <span>Brasilia</span></Info>
      </Content>
    </Root>

  )
}

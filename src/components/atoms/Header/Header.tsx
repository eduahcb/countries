import React, { ReactElement } from 'react'

import { ReactComponent as Moon } from 'assets/moon.svg'

import { Container, Content, Title, ImageContainer } from './style'

export const Header = (): ReactElement => {
  return (
    <Container>
      <Content>
        <Title>Where in the world?</Title>
        <ImageContainer role="button">
          <Moon />
          <p>Dark Mode</p>
        </ImageContainer>
      </Content>
    </Container>
  )
}

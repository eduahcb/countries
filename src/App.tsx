import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import { GlobalStyle } from 'styles/GlobalStyle'

import { Header } from 'components/atoms/Header'

function App (): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  )
}

export default App

import React, { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from 'App'
import { Home } from 'routes/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      index: true,
      element: <Home />
    }]
  }
])

export const Router = (): ReactElement => {
  return (
    <RouterProvider router={router} />
  )
}

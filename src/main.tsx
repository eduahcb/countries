import React from 'react'
import ReactDOM from 'react-dom/client'

import { fakeApi } from 'fake-api/server'
import { Router } from './Router'

if (import.meta.env.DEV) {
  fakeApi()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)

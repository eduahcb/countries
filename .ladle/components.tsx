import React from 'react'

import { GlobalStyle } from '../src/styles/GlobalStyle'

import { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({
  children,
}) => (
  <>
    <GlobalStyle/> 
    <div style={{ height: '100%', background: 'var(--background)'}}>
      {children}
    </div>
  </>
);
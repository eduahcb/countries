import React from 'react'
import { StoryDecorator } from '@ladle/react'

import { GlobalStyle } from '../src/styles/GlobalStyle'

import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({
  children
}) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
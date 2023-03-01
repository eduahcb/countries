import React, { ReactElement } from 'react'

import { action } from '@ladle/react'

import { Card } from 'components/atoms/Card'

export const usage = (): ReactElement => {
  return (
    <Card>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit aliquid iusto aspernatur repudiandae.</p>
    </Card>
  )
}

export const interactive = (): ReactElement => {
  return (
    <Card clickable onClick={action('clicked')}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit aliquid iusto aspernatur repudiandae.</p>
    </Card>
  )
}

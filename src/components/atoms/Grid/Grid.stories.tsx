import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { Grid } from 'components/atoms/Grid'
import { Card } from 'components/atoms/Card'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
`

export const usage = (): ReactElement => (
  <>
    <Grid gap={12}>
      <Grid.Column>
        <Card>1</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>2</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>3</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>4</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>5</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>6</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>7</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>8</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>9</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>10</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>11</Card>
      </Grid.Column>
      <Grid.Column>
        <Card>12</Card>
      </Grid.Column>
    </Grid>
  </>
)

export const withBreakPoints = (): ReactElement => (
  <Grid gap={12}>
    <Grid.Column sm={12} md={6}>
      <StyledCard>sm=12 md=6</StyledCard>
    </Grid.Column>
    <Grid.Column sm={12} md={6}>
      <StyledCard>sm=12 md=6</StyledCard>
    </Grid.Column>

    <Grid.Column sm={12} md={4}>
      <StyledCard>sm=12 md=4</StyledCard>
    </Grid.Column>

    <Grid.Column sm={12} md={4}>
      <StyledCard>sm=12 md=4</StyledCard>
    </Grid.Column>

    <Grid.Column sm={12} md={4}>
      <StyledCard>sm=12 md=4</StyledCard>
    </Grid.Column>
  </Grid>
)

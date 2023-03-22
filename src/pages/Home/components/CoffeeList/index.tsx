import React from 'react'
import styled from 'styled-components'
import { StyledText } from '../../../../components/Text'
import { defaultTheme } from '../../../../styles/themes/default'
import { CoffeeCard } from './components/CoffeeCard'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <StyledText
        tag="h3"
        size={32}
        variant="header"
        color={defaultTheme['base-subtitle']}
      >
        Nossos cafés
      </StyledText>
      <CardsList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CardsList>
    </CoffeeListContainer>
  )
}

const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
  max-width: 70rem;
  align-self: center;
`

const CardsList = styled.div`
  display: flex;
  column-gap: 32px;
  row-gap: 40px;
  flex-wrap: wrap;
`

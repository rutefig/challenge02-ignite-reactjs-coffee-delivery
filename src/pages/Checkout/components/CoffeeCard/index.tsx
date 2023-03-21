import { Trash } from '@phosphor-icons/react'
import React from 'react'
import styled from 'styled-components'
import coffeeImg from '../../../../assets/coffee1.svg'
import { Button } from '../../../../components/Button'
import { Counter } from '../../../../components/Counter'
import { StyledText } from '../../../../components/Text'
import { defaultTheme } from '../../../../styles/themes/default'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeInfoContainer>
        <CoffeeImage src={coffeeImg} />
        <CoffeeActionsContainer>
          <StyledText tag="p" color={defaultTheme['base-subtitle']}>
            Expresso Tradicional
          </StyledText>
          <ActionsRow>
            <Counter />
            <Button
              variant="icon"
              style={{ textTransform: 'uppercase' }}
              backgroundColor={defaultTheme['base-button']}
              hoverColor={defaultTheme['base-hover']}
            >
              <Trash color={defaultTheme['purple']} />
              <StyledText
                tag="span"
                size={12}
                color={defaultTheme['base-text']}
              >
                Remover
              </StyledText>
            </Button>
          </ActionsRow>
        </CoffeeActionsContainer>
        <StyledText tag="span" weight="bold">
          R$ 9,90
        </StyledText>
      </CoffeeInfoContainer>
    </CoffeeCardContainer>
  )
}

const CoffeeCardContainer = styled.div`
  display: flex;
`

const CoffeeInfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`

const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`

const CoffeeActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ActionsRow = styled.div`
  display: flex;
  gap: 0.5rem;
`

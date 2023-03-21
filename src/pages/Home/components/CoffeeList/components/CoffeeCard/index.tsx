import React from 'react'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import coffeeImg from '../../../../../../assets/coffee1.svg'
import { Button } from '../../../../../../components/Button'
import { Counter } from '../../../../../../components/Counter'
import { StyledText } from '../../../../../../components/Text'
import { defaultTheme } from '../../../../../../styles/themes/default'
import {
  ActionsContainer,
  ActionsForm,
  CardContainer,
  CoffeeImage,
  TagsContainer,
  TagWrapper,
  TextContainer,
} from './styles'

export const CoffeeCard = () => {
  return (
    <CardContainer>
      <CoffeeImage src={coffeeImg} />

      <TagsContainer>
        <TagWrapper>
          <StyledText
            tag="span"
            color={defaultTheme['yellow-dark']}
            size={10}
            weight="bold"
          >
            Tradicional
          </StyledText>
        </TagWrapper>
        <TagWrapper>
          <StyledText
            tag="span"
            color={defaultTheme['yellow-dark']}
            size={10}
            weight="bold"
          >
            Gelado
          </StyledText>
        </TagWrapper>
      </TagsContainer>

      <TextContainer>
        <StyledText
          tag="h4"
          variant="header"
          size={20}
          color={defaultTheme['base-subtitle']}
        >
          Expresso Tradicional
        </StyledText>
        <StyledText tag="p" size={14} color={defaultTheme['base-label']}>
          O tradicional café feito com água quente e grãos moídos
        </StyledText>
      </TextContainer>

      <ActionsContainer>
        <StyledText
          className="price"
          variant="header"
          size={24}
          color={defaultTheme['base-text']}
        >
          9,90
        </StyledText>

        <ActionsForm>
          <Counter />
          <Button
            backgroundColor={defaultTheme['purple-dark']}
            hoverColor={defaultTheme['purple']}
          >
            <ShoppingCartSimple weight="fill" width={'1.375rem'} />
          </Button>
        </ActionsForm>
      </ActionsContainer>
    </CardContainer>
  )
}

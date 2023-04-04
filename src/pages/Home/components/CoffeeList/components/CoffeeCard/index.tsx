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
import { Coffee } from '../../../../../../contexts/CoffeesContext'

interface CoffeeCardProps {
  coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const { name, description, categories, price } = coffee

  return (
    <CardContainer>
      <CoffeeImage src={coffeeImg} />

      <TagsContainer>
        {categories.map((category) => {
          return (
            <TagWrapper key={category}>
              <StyledText
                tag="span"
                color={defaultTheme['yellow-dark']}
                size={10}
                weight="bold"
              >
                {category}
              </StyledText>
            </TagWrapper>
          )
        })}
      </TagsContainer>

      <TextContainer>
        <StyledText
          tag="h4"
          variant="header"
          size={20}
          color={defaultTheme['base-subtitle']}
        >
          {name}
        </StyledText>
        <StyledText tag="p" size={14} color={defaultTheme['base-label']}>
          {description}
        </StyledText>
      </TextContainer>

      <ActionsContainer>
        <StyledText
          className="price"
          variant="header"
          size={24}
          color={defaultTheme['base-text']}
        >
          {price}
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

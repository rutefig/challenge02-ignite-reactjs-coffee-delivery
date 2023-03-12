import React from 'react'
import styled from 'styled-components'
import coffeeImg from '../../../../../../assets/coffee1.svg'
import { StyledText } from '../../../../../../components/Text'
import { defaultTheme } from '../../../../../../styles/themes/default'

export const CoffeeCard = () => {
  return (
    <CardContainer>
      <CoffeeImage src={coffeeImg} />
      <TagsContainer>
        <Tag>
          <StyledText
            tag="span"
            color={defaultTheme['yellow-dark']}
            size={10}
            weight="bold"
          >
            Tradicional
          </StyledText>
        </Tag>
        <Tag>
          <StyledText
            tag="span"
            color={defaultTheme['yellow-dark']}
            size={10}
            weight="bold"
          >
            Gelado
          </StyledText>
        </Tag>
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
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  position: relative;
`
const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  position: absolute;
  left: calc(50% - 7.5rem / 2);
  top: -1.25rem;
`
const Tag = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  text-transform: uppercase;
`
const TagsContainer = styled.div`
  margin-top: 7.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.25rem;
  text-align: center;
`

import { Package, ShoppingCart } from '@phosphor-icons/react'
import React from 'react'
import coffeeImg from '../../../../assets/img_coffee_home.svg'
import { StyledText } from '../../../../components/Text'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  HeroContainer,
  TextContainer,
  HeroImage,
  ItemsContainer,
  Item,
  IconContainer,
  TitleContainer,
} from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <TextContainer>
        <TitleContainer>
          <StyledText
            tag="h1"
            color={defaultTheme['base-title']}
            variant="header"
            weight="bolder"
            size={48}
          >
            Encontre o café perfeito para qualquer hora do dia
          </StyledText>
          <StyledText
            style={{ fontStretch: '100' }}
            tag="h2"
            size={20}
            color={defaultTheme['base-subtitle']}
          >
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </StyledText>
        </TitleContainer>

        <ItemsContainer>
          <Item>
            <IconContainer color={defaultTheme['yellow-dark']}>
              <ShoppingCart color={defaultTheme['white']} weight="fill" />
            </IconContainer>
            <span>Compra simples e segura</span>
          </Item>

          <Item>
            <IconContainer color={defaultTheme['base-text']}>
              <Package color={defaultTheme['white']} weight="fill" />
            </IconContainer>
            <span>Embalagem mantém o café intacto</span>
          </Item>
        </ItemsContainer>
      </TextContainer>
      <HeroImage src={coffeeImg} />
    </HeroContainer>
  )
}

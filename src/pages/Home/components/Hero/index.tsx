import React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
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
            <StyledText tag="span">Compra simples e segura</StyledText>
          </Item>

          <Item>
            <IconContainer color={defaultTheme['base-text']}>
              <Package color={defaultTheme['white']} weight="fill" />
            </IconContainer>
            <StyledText tag="span">Embalagem mantém o café intacto</StyledText>
          </Item>

          <Item>
            <IconContainer color={defaultTheme['yellow']}>
              <Timer color={defaultTheme['white']} weight="fill" />
            </IconContainer>
            <StyledText tag="span">Entrega rápida e rastreada</StyledText>
          </Item>

          <Item>
            <IconContainer color={defaultTheme['purple']}>
              <Coffee color={defaultTheme['white']} weight="fill" />
            </IconContainer>
            <StyledText tag="span">O café chega fresquinho até você</StyledText>
          </Item>
        </ItemsContainer>
      </TextContainer>
      <HeroImage src={coffeeImg} />
    </HeroContainer>
  )
}

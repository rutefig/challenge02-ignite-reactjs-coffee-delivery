import { Package, ShoppingCart } from '@phosphor-icons/react'
import React from 'react'
import coffeeImg from '../../../../assets/img_coffee_home.svg'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  HeroContainer,
  TextContainer,
  Title,
  Subtitle,
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
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </TitleContainer>

        <ItemsContainer>
          <Item>
            <IconContainer>
              <ShoppingCart color={defaultTheme['white']} weight="fill" />
            </IconContainer>
            <span>Compra simples e segura</span>
          </Item>

          <Item>
            <IconContainer>
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

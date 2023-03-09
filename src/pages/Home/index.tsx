import React from 'react'
import {
  Title,
  HomeContainer,
  Subtitle,
  HeroImage,
  HeroContainer,
  HeroTextContainer,
  HeaderContainer,
  HeaderLogo,
} from './styles'
import coffeeImg from '../../assets/img_coffee_home.svg'
import headerLogo from '../../assets/header_logo.svg'

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <HeaderLogo src={headerLogo} />
      </HeaderContainer>

      <HeroContainer>
        <HeroTextContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </HeroTextContainer>
        <HeroImage src={coffeeImg} />
      </HeroContainer>
    </HomeContainer>
  )
}

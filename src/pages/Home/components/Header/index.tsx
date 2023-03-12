import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import React from 'react'
import headerLogo from '../../../../assets/header_logo.svg'
import { Button } from '../../../../components/Button'
import { StyledText } from '../../../../components/Text'
import { defaultTheme } from '../../../../styles/themes/default'
import { HeaderContainer, HeaderInfoContainer, HeaderLogo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={headerLogo} />

      <HeaderInfoContainer>
        <Button
          variant="icon"
          backgroundColor={defaultTheme['purple-light']}
          hoverColor={defaultTheme['purple-light']}
        >
          <MapPin weight="fill" color={defaultTheme['purple']} />
          <StyledText tag="span" size={14} color={defaultTheme['purple-dark']}>
            Porto Alegre, RS
          </StyledText>
        </Button>

        <Button
          variant="icon"
          backgroundColor={defaultTheme['yellow-light']}
          hoverColor={defaultTheme['yellow-light']}
        >
          <ShoppingCart weight="fill" color={defaultTheme['yellow-dark']} />
        </Button>
      </HeaderInfoContainer>
    </HeaderContainer>
  )
}

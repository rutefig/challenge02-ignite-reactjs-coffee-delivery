import React from 'react'
import headerLogo from '../../../../assets/header_logo.svg'
import { HeaderContainer, HeaderLogo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={headerLogo} />
    </HeaderContainer>
  )
}

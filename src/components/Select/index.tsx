import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { Button } from '../Button'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Select: React.FC<Props> = ({ children, ...props }) => {
  return (
    <StyledSelect
      variant="icon"
      backgroundColor={defaultTheme['base-button']}
      hoverColor={defaultTheme['base-hover']}
      focusBorderColor={defaultTheme['purple']}
      {...props}
    >
      {children}
    </StyledSelect>
  )
}

const StyledSelect = styled(Button)`
  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple']};
    background: ${(props) => props.theme['purple-light']};
  }
`

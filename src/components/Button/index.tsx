import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

type Variant = 'normal' | 'small' | 'icon'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export const Button: React.FC<Props> = ({
  variant = 'normal',
  children,
  ...props
}) => {
  return <Button variant={variant} {...props}>{children}</Button>
}

const getPadding = (variant: Variant) => {
  switch (variant) {
    case 'small':
      return {
        background: defaultTheme['base-button'],
        hoverBackground: defaultTheme['base-hover'],
        textColor: defaultTheme['base-text'],
        fontSize: '0.75rem',
        padding: '0px 8px',
      }
    case 'icon':
      return {
        background: defaultTheme['purple-dark'],
        hoverBackground: defaultTheme['purple'],
        textColor: defaultTheme['white'],
        padding: '8px',
      }
    default:
      return {
        background: defaultTheme['yellow'],
        hoverBackground: defaultTheme['yellow-dark'],
        textColor: defaultTheme['white'],
        fontSize: '0.875rem',
        padding: '12px 8px',
      }
  }
}

export const StyledButton = styled(Button).attrs((props) => ({
  ...getPadding(props.variant ?? 'normal'),
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  line-height: 160%;
  text-transform: uppercase;

  padding: ${(props) => props.padding};

  background: ${(props) => props.background};

  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};

  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.hoverBackground};
  }
`

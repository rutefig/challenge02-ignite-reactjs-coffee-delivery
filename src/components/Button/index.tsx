import React, { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

type Variant = 'normal' | 'small' | 'icon'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  backgroundColor?: string
  hoverColor?: string
}

export const Button: React.FC<Props> = ({
  variant = 'normal',
  backgroundColor,
  hoverColor,
  children,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  line-height: 160%;
  text-transform: uppercase;

  transition: all 0.2s ease;

  ${(props) => {
    const { variant, backgroundColor, hoverColor } = props

    const normalStyle = css`
      padding: 12px 8px;
      font-size: 0.875rem;
      background: ${backgroundColor ?? props.theme['yellow']};
      color: ${props.theme['white']};
    `

    const iconStyle = css`
      padding: 8px;
      background: ${backgroundColor ?? props.theme['purple-dark']};
      color: ${props.theme['white']};
    `

    const smallStyle = css`
      padding: 0px 8px;
      font-size: 0.75rem;
      background: ${backgroundColor ?? props.theme['base-button']};
      color: ${props.theme['base-text']};
    `

    if (variant === 'icon') {
      return iconStyle
    } else if (variant === 'small') {
      return smallStyle
    } else {
      return normalStyle
    }
  }}

  &:hover {
    ${(props) => {
      const { variant, hoverColor } = props

      const normalStyle = css`
        background: ${hoverColor ?? props.theme['yellow-dark']};
      `

      const iconStyle = css`
        background: ${hoverColor ?? props.theme['purple']};
      `

      const smallStyle = css`
        background: ${hoverColor ?? props.theme['base-hover']};
      `

      if (variant === 'icon') {
        return iconStyle
      } else if (variant === 'small') {
        return smallStyle
      } else {
        return normalStyle
      }
    }}
  }
`

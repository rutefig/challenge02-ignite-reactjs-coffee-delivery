import React, { ElementType, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

interface Props extends HTMLAttributes<HTMLElement> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  variant?: 'header' | 'text'
  weight?: 'normal' | 'bold' | 'bolder'
  size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48
  lineHeight?: 130 | 160
}

export const Text: React.FC<Props> = ({
  tag = 'p',
  variant = 'text',
  color = defaultTheme['base-text'],
  weight = variant === 'text' ? 'normal' : 'bold',
  size = 16,
  lineHeight = 130,
  children,
  ...props
}) => {
  const Tag = tag as ElementType

  return (
    <Tag
      variant={variant}
      color={color}
      weight={weight}
      size={size / 16}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </Tag>
  )
}

export const StyledText = styled(Text)`
  font-family: ${(props) => (props.variant === 'header' ? '\'Baloo 2\', cursive' : '\'Roboto\', sans-serif')};
  font-size: ${(props) => (props.size ?? 16) / 16}rem;
  font-weight: ${(props) => props.weight ?? 'normal'};
  line-height: ${(props) => props.lineHeight ?? 130}%;

  color: ${(props) => props.color};
`

import { Minus, Plus } from '@phosphor-icons/react'
import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Counter: React.FC<Props> = () => {
  return (
    <CounterContainer>
      <Minus weight='regular' color={defaultTheme['purple-dark']} />
      <StyledInput type="number" />
      <Plus weight='regular' color={defaultTheme['purple-dark']} />
    </CounterContainer>
  )
}

const CounterContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 8px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  width: 4.5rem;
  /* height: 2rem; */
`

const StyledInput = styled.input`
  border: none;
  background: inherit;
  /* width: -webkit-fill-available; */
  max-width: 1.25rem;

  caret-color: transparent;

  :focus {
    box-shadow: none;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

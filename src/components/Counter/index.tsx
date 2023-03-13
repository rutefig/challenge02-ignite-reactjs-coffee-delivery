import { Minus, Plus } from '@phosphor-icons/react'
import React, { InputHTMLAttributes, useState } from 'react'
import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Counter: React.FC<Props> = () => {
  const [value, setValue] = useState(0)

  const minValue = 0
  const maxValue = 10

  const handleIncrementValue = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (value < maxValue) {
      setValue(value + 1)
    }
  }

  const handleDecrementValue = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (value > minValue) {
      setValue(value - 1)
    }
  }

  return (
    <CounterContainer>
      <Minus
        className="icon"
        weight="regular"
        color={defaultTheme['purple-dark']}
        onClick={handleDecrementValue}
      />
      <StyledInput type="number" value={value} min={minValue} max={maxValue} onChange={() => {/** */}} />
      <Plus
        className="icon"
        weight="regular"
        color={defaultTheme['purple-dark']}
        onClick={handleIncrementValue}
      />
    </CounterContainer>
  )
}

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 8px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  width: 4.5rem;
  /* height: 2rem; */

  .icon {
    cursor: pointer;
  }
`

const StyledInput = styled.input`
  border: none;
  background: inherit;
  text-align: center;
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

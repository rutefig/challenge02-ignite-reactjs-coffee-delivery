import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Counter: React.FC<Props> = () => {
  return <StyledInput type='number' />
}

const StyledInput = styled.input`
  display: flex;
  gap: 0.25rem;
  padding: 8px;
  background: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;

  width: 4.5rem;
  height: 2rem;

  caret-color: transparent;

  :focus {
    box-shadow: none;
  }

  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

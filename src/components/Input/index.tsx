import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { Text } from '../Text'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = ({
  required,
  style,
  className,
  ...props
}) => {
  return (
    <InputContainer style={style} className={className}>
      <StyledInput {...props} />
      {!required && (
        <LabelContainer>
          <StyledText tag="span">Opcional</StyledText>
        </LabelContainer>
      )}
    </InputContainer>
  )
}

const InputContainer = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  width: -webkit-fill-available;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  background: ${(props) => props.theme['base-input']};

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus,
  :active {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

const LabelContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0.75rem;
  z-index: 500;
  height: -webkit-fill-available;
  display: flex;
  align-items: center;
`
const StyledText = styled(Text)`
  font-size: 0.8125rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`

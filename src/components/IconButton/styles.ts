import styled from 'styled-components'

export const IconButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  width: 2.375rem;
  height: 2.375rem;

  border: none;
  border-radius: 6px;
  cursor: pointer;

  background: ${(props) => props.theme['purple-dark']};

  color: ${(props) => props.theme['base-card']};

  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme['purple']};
  }
`

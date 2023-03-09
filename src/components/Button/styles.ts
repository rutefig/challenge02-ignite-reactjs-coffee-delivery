import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  width: 8.25rem;
  height: 2.875rem;

  border: none;
  border-radius: 6px;
  cursor: pointer;

  background: ${(props) => props.theme['yellow']};

  color: ${(props) => props.theme['white']};
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;

  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

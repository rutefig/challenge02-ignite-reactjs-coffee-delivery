import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  position: relative;
`
export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  position: absolute;
  left: calc(50% - 7.5rem / 2);
  top: -1.25rem;
`
export const TagWrapper = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  text-transform: uppercase;
`
export const TagsContainer = styled.div`
  margin-top: 7.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.25rem;
  text-align: center;
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;

  & .price::before {
    content: 'R$';
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }
`

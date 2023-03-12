import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;

  padding: 92px 0px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  max-width: 36.75rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ItemsContainer = styled.div`
  display: flex;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  flex-wrap: wrap;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
`

export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 1000px;
  background: ${(props) => props.color};
`

export const HeroImage = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`

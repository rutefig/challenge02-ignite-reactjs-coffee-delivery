import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;

  padding: 92px 160px;
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

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ItemsContainer = styled.div`
    display: flex;
    row-gap: 2.5rem;
    column-gap: 1.25rem;
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
    background: ${(props) => props.theme['yellow-dark']};
`

export const HeroImage = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`

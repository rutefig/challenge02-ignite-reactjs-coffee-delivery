import styled from 'styled-components'

export const HomeContainer = styled.div``

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 32px 160px;
`

export const HeaderLogo = styled.img`
    /* width: 5.30rem; */
    height: 2.5rem;
`

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;

  padding: 92px 160px;
`

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 36.75rem;
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

export const HeroImage = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`

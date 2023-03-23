import React from 'react'
import styled from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { StyledText } from '../../components/Text'
import { defaultTheme } from '../../styles/themes/default'
import scooterImg from '../../assets/img_scooter.svg'

export function Success() {
  return (
    <SuccessContainer>
      <HeaderContainer>
        <StyledText
          variant="header"
          tag="h1"
          size={32}
          weight="bolder"
          color={defaultTheme['yellow-dark']}
        >
          Uhu! Pedido confirmado
        </StyledText>
        <StyledText tag="h2" size={20} color={defaultTheme['base-subtitle']}>
          Agora é só aguardar que logo o café chegará até você
        </StyledText>
      </HeaderContainer>

      <ContentContainer>
        <OrderInfoContainer>
          <OrderInfoItem>
            <IconContainer color={defaultTheme['purple']}>
              <MapPin weight="fill" color={defaultTheme['white']} />
            </IconContainer>
            <TextContainer>
              <StyledText>
                Entrega em{' '}
                <StyledText tag="span" weight="bold">
                  Rua João Daniel Martinelli, 102
                </StyledText>{' '}
                Farrapos - Porto Alegre, RS
              </StyledText>
            </TextContainer>
          </OrderInfoItem>

          <OrderInfoItem>
            <IconContainer color={defaultTheme['yellow']}>
              <Timer weight="fill" color={defaultTheme['white']} />
            </IconContainer>
            <TextContainer>
              <StyledText>Previsão de entrega</StyledText>
              <StyledText weight="bold">20 min - 30 min</StyledText>
            </TextContainer>
          </OrderInfoItem>

          <OrderInfoItem>
            <IconContainer color={defaultTheme['yellow-dark']}>
              <CurrencyDollar color={defaultTheme['white']} />
            </IconContainer>
            <TextContainer>
              <StyledText>Pagamento na entrega</StyledText>
              <StyledText weight="bold">Cartão de Crédito</StyledText>
            </TextContainer>
          </OrderInfoItem>
        </OrderInfoContainer>

        <SuccessImage src={scooterImg} />
      </ContentContainer>
    </SuccessContainer>
  )
}

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 5rem;
`

const HeaderContainer = styled.div``

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 32.875rem;
  position: relative;
  box-sizing: border-box;
  background: ${(props) => props.theme['background']};
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 6px 36px;

  padding: 2.5rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme['yellow']},
      ${(props) => props.theme['purple']}
    );
  }
`

const OrderInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 22.125rem;
`

const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 1000px;
  background: ${(props) => props.color};
`

const TextContainer = styled.div``

const SuccessImage = styled.img`
  max-width: 30.75rem;
`

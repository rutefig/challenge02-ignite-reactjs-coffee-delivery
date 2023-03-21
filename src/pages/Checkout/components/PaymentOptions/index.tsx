import React from 'react'
import styled from 'styled-components'
import { CreditCard, Bank, Money } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { StyledText } from '../../../../components/Text'
import { defaultTheme } from '../../../../styles/themes/default'

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      <Button
        variant="icon"
        backgroundColor={defaultTheme['base-button']}
        hoverColor={defaultTheme['base-hover']}
      >
        <CreditCard size={16} color={defaultTheme['purple']} />
        <StyledText size={12} color={defaultTheme['base-text']}>
          Cartão de crédito
        </StyledText>
      </Button>
      <Button
        variant="icon"
        backgroundColor={defaultTheme['base-button']}
        hoverColor={defaultTheme['base-hover']}
      >
        <Bank size={16} color={defaultTheme['purple']} />
        <StyledText size={12} color={defaultTheme['base-text']}>
          Cartão de débito
        </StyledText>
      </Button>
      <Button
        variant="icon"
        backgroundColor={defaultTheme['base-button']}
        hoverColor={defaultTheme['base-hover']}
      >
        <Money size={16} color={defaultTheme['purple']} />
        <StyledText size={12} color={defaultTheme['base-text']}>
          Dinheiro
        </StyledText>
      </Button>
    </PaymentOptionsContainer>
  )
}

const PaymentOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;

  button {
    flex: 1;
    justify-content: flex-start;
    padding: 1rem;
    white-space: nowrap;
    text-transform: uppercase;
  }
`

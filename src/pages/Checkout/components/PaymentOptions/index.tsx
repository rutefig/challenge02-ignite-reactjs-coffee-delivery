import React from 'react'
import styled from 'styled-components'
import { CreditCard, Bank, Money } from '@phosphor-icons/react'
import { StyledText } from '../../../../components/Text'
import { defaultTheme } from '../../../../styles/themes/default'
import { Select } from '../../../../components/Select'

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      <Select>
        <CreditCard size={16} color={defaultTheme['purple']} />
        <StyledText size={12} color={defaultTheme['base-text']}>
          Cartão de crédito
        </StyledText>
      </Select>
      <Select>
        <Bank size={16} color={defaultTheme['purple']} />
        <StyledText size={12} color={defaultTheme['base-text']}>
          Cartão de débito
        </StyledText>
      </Select>
      <Select>
        <Money size={16} color={defaultTheme['purple']} />
        <StyledText size={12} color={defaultTheme['base-text']}>
          Dinheiro
        </StyledText>
      </Select>
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

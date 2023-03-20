import React from 'react'
import { MapPinLine } from '@phosphor-icons/react'
import { Text } from '../../components/Text'
import { defaultTheme } from '../../styles/themes/default'
import {
  CheckoutContainer,
  FormContainer,
  OrderFormContainer,
  OrderFormHeader,
  TextContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <Text
          variant="header"
          tag="h4"
          color={defaultTheme['base-subtitle']}
          weight="bold"
          size={18}
        >
          Complete o seu pedido
        </Text>
        <OrderFormContainer>
          <OrderFormHeader>
            <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
            <TextContainer>
              <Text color={defaultTheme['base-subtitle']}>
                Endereço de Entrega
              </Text>
              <Text size={14}>
                Informe o endereço onde deseja receber seu pedido
              </Text>
            </TextContainer>
          </OrderFormHeader>
        </OrderFormContainer>
      </FormContainer>
      <FormContainer>
        <Text
          variant="header"
          tag="h4"
          color={defaultTheme['base-subtitle']}
          weight="bold"
          size={18}
        >
          Cafés selecionados
        </Text>
      </FormContainer>
    </CheckoutContainer>
  )
}

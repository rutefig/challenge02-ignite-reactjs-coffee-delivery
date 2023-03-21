import React from 'react'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { StyledText, Text } from '../../components/Text'
import { defaultTheme } from '../../styles/themes/default'
import {
  CheckoutContainer,
  FormContainer,
  InputsContainer,
  OrderFormContainer,
  OrderFormHeader,
  RowInputsContainer,
  TextContainer,
} from './styles'
import { Input } from '../../components/Input'
import { PaymentOptions } from './components/PaymentOptions'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <StyledText
          variant="header"
          tag="h4"
          color={defaultTheme['base-subtitle']}
          weight="bold"
          size={18}
        >
          Complete o seu pedido
        </StyledText>
        <OrderFormContainer>
          <OrderFormHeader>
            <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
            <TextContainer>
              <StyledText color={defaultTheme['base-subtitle']}>
                Endereço de Entrega
              </StyledText>
              <StyledText size={14}>
                Informe o endereço onde deseja receber seu pedido
              </StyledText>
            </TextContainer>
          </OrderFormHeader>

          <InputsContainer>
            <Input placeholder="CEP" required />
            <Input placeholder="Rua" required />
            <RowInputsContainer>
              <Input placeholder="Número" required />
              <Input
                style={{ width: '-webkit-fill-available' }}
                placeholder="Complemento"
              />
            </RowInputsContainer>
            <RowInputsContainer>
              <Input placeholder="Bairro" required />
              <Input
                style={{ width: '-webkit-fill-available' }}
                placeholder="Cidade"
                required
              />
              <Input placeholder="UF" style={{ width: '3.75rem' }} required />
            </RowInputsContainer>
          </InputsContainer>
        </OrderFormContainer>

        <OrderFormContainer>
          <OrderFormHeader>
            <CurrencyDollar size={22} color={defaultTheme['purple']} />
            <TextContainer>
              <StyledText color={defaultTheme['base-subtitle']}>
                Pagamento
              </StyledText>
              <StyledText size={14}>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </StyledText>
            </TextContainer>
          </OrderFormHeader>

          <PaymentOptions />
        </OrderFormContainer>
      </FormContainer>

      <FormContainer>
        <StyledText
          variant="header"
          tag="h4"
          color={defaultTheme['base-subtitle']}
          weight="bold"
          size={18}
        >
          Cafés selecionados
        </StyledText>
      </FormContainer>
    </CheckoutContainer>
  )
}

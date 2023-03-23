import React from 'react'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { StyledText } from '../../components/Text'
import { defaultTheme } from '../../styles/themes/default'
import {
  CheckoutContainer,
  ConfirmButton,
  Divider,
  FormContainer,
  OrderFormContainer,
  OrderFormHeader,
  PriceInfoRow,
  SelectedCoffeesList,
  TextContainer,
  TotalPriceContainer,
} from './styles'
import { PaymentOptions } from './components/PaymentOptions'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'
import { CoffeeCard } from './components/CoffeeCard'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer style={{ flex: '1' }}>
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

          <DeliveryAddressForm />
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

        <SelectedCoffeesList>
          <CoffeeCard />
          <Divider />
          <CoffeeCard />
          <Divider />
          <TotalPriceContainer>
            <PriceInfoRow>
              <StyledText size={14}>Total de itens</StyledText>
              <StyledText>R$ 29,70</StyledText>
            </PriceInfoRow>
            <PriceInfoRow>
              <StyledText size={14}>Entrega</StyledText>
              <StyledText>R$ 3,50</StyledText>
            </PriceInfoRow>
            <PriceInfoRow>
              <StyledText
                size={20}
                weight="bold"
                color={defaultTheme['base-subtitle']}
              >
                Total
              </StyledText>
              <StyledText
                size={20}
                weight="bold"
                color={defaultTheme['base-subtitle']}
              >
                R$ 33,20
              </StyledText>
            </PriceInfoRow>
          </TotalPriceContainer>
          <ConfirmButton>
            <StyledText size={14} weight="bold">
              Confirmar Pedido
            </StyledText>
          </ConfirmButton>
        </SelectedCoffeesList>
      </FormContainer>
    </CheckoutContainer>
  )
}

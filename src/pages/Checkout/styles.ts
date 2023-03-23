import styled from 'styled-components'
import { Button } from '../../components/Button'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const OrderFormHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const SelectedCoffeesList = styled(OrderFormContainer)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: max-content;
  border-radius: 6px 44px;
`

export const Divider = styled.hr`
  width: -webkit-fill-available;
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: -webkit-fill-available;
`

export const PriceInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ConfirmButton = styled(Button)`
  width: -webkit-fill-available;
  text-transform: uppercase;
`

import styled from 'styled-components'

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

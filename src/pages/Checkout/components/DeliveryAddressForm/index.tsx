import React from 'react'
import styled from 'styled-components'
import { Input } from '../../../../components/Input'

export function DeliveryAddressForm() {
  return (
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
  )
}

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: -webkit-fill-available;
`

export const RowInputsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

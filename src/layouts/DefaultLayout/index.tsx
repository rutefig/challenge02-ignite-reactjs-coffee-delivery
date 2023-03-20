import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  padding: 0px 160px;
`

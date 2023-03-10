import React from 'react'
import { HomeContainer } from './styles'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <Hero />
    </HomeContainer>
  )
}

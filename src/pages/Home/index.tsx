import React from 'react'
import { HomeContainer } from './styles'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Hero />
      <CoffeeList />
    </HomeContainer>
  )
}

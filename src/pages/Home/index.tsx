import React from 'react'
import { HomeContainer } from './styles'
import { Hero } from './components/Hero'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <CoffeeList />
    </HomeContainer>
  )
}

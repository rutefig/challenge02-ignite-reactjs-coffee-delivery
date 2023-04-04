import React, { useEffect, useState } from 'react'
import { HomeContainer } from './styles'
import { Hero } from './components/Hero'
import { CoffeeList } from './components/CoffeeList'

export interface Coffee {
  id: number
  name: string
  description: string
  categories: string[]
  price: number
}

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  async function fetchCoffees() {
    const response = await fetch('http://localhost:3333/coffees')
    const data = await response.json()
    setCoffees(data)
  }

  useEffect(() => {
    fetchCoffees()
  }, [])

  return (
    <HomeContainer>
      <Hero />
      <CoffeeList coffees={coffees} />
    </HomeContainer>
  )
}

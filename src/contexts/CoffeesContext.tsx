import React, { useEffect, useState } from 'react'
import { createContext, ReactNode } from 'react'

interface Coffee {
  id: number
  name: string
  description: string
  categories: string[]
  price: number
}

interface CoffeesContextData {
  coffees: Coffee[]
}

interface CoffeesProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextData)

export function CoffeesProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  async function fetchCoffees() {
    const response = await fetch('http://localhost:3333/coffees')
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchCoffees()
  }, [])

  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}

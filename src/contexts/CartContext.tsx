import React, { createContext, ReactNode, useState } from 'react'

interface Item {
  id: number
  name: string
  description: string
  categories: string[]
  price: number
  quantity: number
}

interface CartContextData {
  items: Item[]
  totalItems: number
  addItem: (item: Item, quantity: number) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<Item[]>([])
  const totalItems = items.length

  function addItem(newItem: Item, quantity: number) {
    setItems((state) => {
      const item = state.find((item) => newItem.id === item.id)
      if (item) {
        return state.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, quantity: item.quantity + quantity }
          } else {
            return item
          }
        })
      } else {
        return [...items, { ...newItem, quantity }]
      }
    })
  }

  console.log(items)

  return (
    <CartContext.Provider value={{ items, totalItems, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

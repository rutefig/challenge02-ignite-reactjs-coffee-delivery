import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App

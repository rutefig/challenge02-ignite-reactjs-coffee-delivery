import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { CoffeesProvider } from './contexts/CoffeesContext'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <CoffeesProvider>
          <RouterProvider router={router} />
        </CoffeesProvider>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App

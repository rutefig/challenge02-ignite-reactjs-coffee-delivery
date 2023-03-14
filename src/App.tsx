import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App

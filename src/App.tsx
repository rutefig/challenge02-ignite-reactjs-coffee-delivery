import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { IconButton } from './components/IconButton'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <h1>Hello World</h1>
        <Button>Label</Button>
        <IconButton />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App

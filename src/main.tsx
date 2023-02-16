import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import contentImg from './assets/image-equilibrium.jpg'
import authorImg from './assets/image-avatar.png'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)

export const cardData = {
  imgSource: contentImg,
  title: 'Equilibrium #3429',
  bio: 'Our Equilibrium collection promotes balance and calm.',
  value: 0.0041,
  day: 3,
  authorName: ' Jules Wyvern',
  authorImg: authorImg
}



import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import styles from '../styles/css/style.css'
import styles2 from '../styles/css/responsive.css'
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

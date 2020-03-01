import App from 'next/app'
import React from 'react'
import "../global.css"
// import { trackPageView } from '../util';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#000',
  },
}

export default class MyApp extends App {
//   componentDidMount() {
//     Router.onRouteChangeComplete = url => {
//       trackPageView(url);
//     };
//   }
  
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
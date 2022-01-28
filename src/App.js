import React from 'react';
import Footer from './common/Footer/Footer';
import Landing from './container/Landing/Landing';
import { createTheme, ThemeProvider} from '@material-ui/core';

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#999999'
      },
      secondary: {
        main: '#ffffff'
      },
      text: {
        primary: '#00b7eb'
      }
    },
    typography: {
      fontFamily: 'Helvetica',
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Landing />
        <Footer/>
      </ThemeProvider>
    </>
  )
}
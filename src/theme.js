import React from "react";
import { createTheme} from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#999999'
    },
    secondary: {
      main: '#000000'
    },
    text: {
      primary: '#00b7eb'
    }
  },
  typography: {
    fontFamily: 'Helvetica',
  }
})

theme.typography.caption={
    fontSize: '2rem',
    [theme.breakpoints.down('md')]:{
        fontSize: '1.2rem'
    }
}

export default theme;
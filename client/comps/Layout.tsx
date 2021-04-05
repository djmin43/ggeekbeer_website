import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
    spacing: 8,
    typography: {
      fontFamily: 'Noto Sans KR',
      fontWeightLight: 400,
      fontWeightRegular: 700,
      fontWeightBold: 800,
      h1:{
        fontSize: 72,
      },
      h2:{
        fontSize: 36,
        fontWeight: 500,
      },
      body1:{
        fontSize: 18,
        fontWeight: 500,
      },
    },
});

const Layout = ({children}: any) => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
                {children}
            <Footer />
        </ThemeProvider>
    )
};

export default Layout

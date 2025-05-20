
import { createTheme, ThemeProvider } from '@mui/material'
import Router from './Router'
import Navbar from './modules/Navbar'
const theme = createTheme({components:{
  MuiButton: {
    styleOverrides:{
      root: {
        textTransform: 'capitalize'
      }
    }
  }
}})
function App() {
  return <ThemeProvider theme={theme}>
    <>
     <Navbar/>
     <Router/>
     </>
     </ThemeProvider> 
}

export default App

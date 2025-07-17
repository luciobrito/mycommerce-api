
import { colors, createTheme, ThemeProvider } from '@mui/material'
import Router from './Router'
import Navbar from './modules/Navbar'
const theme = createTheme({components:{
  MuiButton: {
    styleOverrides:{
      root: {
        textTransform: 'capitalize',
      }
    },defaultProps:{variant:'contained'}
  }
},palette:{primary:colors.indigo}})
function App() {
  return <ThemeProvider theme={theme}>
    <>
     <Navbar/>
     <Router/>
     </>
     </ThemeProvider> 
}

export default App

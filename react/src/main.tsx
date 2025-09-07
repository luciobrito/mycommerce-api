import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import axios from 'axios';
const theme = createTheme({primaryColor:'indigo', fontFamily:'Rubik'})
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token")

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='light'>
    <App />
    </MantineProvider>
  </StrictMode>,
)

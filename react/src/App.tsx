import AppBar from './modules/AppBar'
import Login from './pages/login/page'
import { isLogged } from './services/loginService'

function App() {
  return <>
  {isLogged() ? <AppBar/> : <Login/>}
  
  
  </>
}

export default App

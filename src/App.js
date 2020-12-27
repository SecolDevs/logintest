import AuthState from './context/auth/AuthState'
import PersonaState from './context/persona/PersonaState'

import tokenAuth from './config/token'
import Formulario from './components/Formulario'

// Revisar si tenemos un token
const token = localStorage.getItem('token')
if (token) {
  tokenAuth(token)
}

function App() {
  return (
    <AuthState>
      <PersonaState>
        <Formulario />
      </PersonaState>
    </AuthState>
  )
}

export default App

import { useContext, useEffect } from 'react'
import AuthContext from './../context/auth/AuthContext'
import LoginForm from './LoginForm'
import LogoutButton from './LogoutButton'
import PersonaForm from './PersonaForm'

const Formulario = () => {
  const authContext = useContext(AuthContext)
  const { token, autenticado, usuarioAutenticado } = authContext

  useEffect(() => {
    if (token) {
      usuarioAutenticado()
    }
  }, [])
  return (
    <>
      {autenticado ? (
        <>
          <PersonaForm />
          <LogoutButton />
        </>
      ) : (
        <LoginForm />
      )}
    </>
  )
}

export default Formulario

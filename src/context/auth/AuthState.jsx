import { useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

import clienteAxios from '../../config/clienteAxios'
import tokenAuth from '../../config/token'

import { LOGIN_EXITOSO, CERRAR_SESION, OBTENER_USUARIO } from '../../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      tokenAuth(token)
    }

    try {
      const respuesta = await clienteAxios.get('users/me')
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.data,
      })
    } catch (error) {
      console.log('Error')
      dispatch({
        type: CERRAR_SESION,
      })
    }
  }

  const iniciarSession = async (datos) => {
    try {
      const respuesta = await clienteAxios.post('auth/authenticate', datos)
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data.data,
      })

      usuarioAutenticado()
    } catch (error) {
      console.log(error)
    }
  }

  const cerrarSession = () => {
    dispatch({
      type: CERRAR_SESION,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        iniciarSession,
        usuarioAutenticado,
        cerrarSession,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState

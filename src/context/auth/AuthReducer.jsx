import { LOGIN_EXITOSO, CERRAR_SESION, OBTENER_USUARIO } from '../../types'

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        autenticado: true,
      }
    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
      }
    case CERRAR_SESION:
      localStorage.removeItem('token')
      console.log('Cerrando')
      return {
        ...state,
        autenticado: null,
        usuario: null,
      }
    default:
      return state
  }
}

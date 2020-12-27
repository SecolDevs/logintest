import { useReducer } from 'react'
import PersonaContext from './PersonaContext'
import PersonaReducer from './PersonaReducer'

import clienteAxios from './../../config/clienteAxios'

import {
  CREAR_PERSONA,
  LISTAR_PERSONA,
  ELIMINAR_PERSONA,
  CREATE_MESSAGE,
  DELETE_MESSAGE,
} from './../../types'

const PersonaState = (props) => {
  const initialState = {
    personas: null,
    loading: true,
    message: null,
  }

  const [state, dispatch] = useReducer(PersonaReducer, initialState)

  const listarPersonas = async () => {
    try {
      const respuesta = await clienteAxios.get('items/persona')
      dispatch({
        type: LISTAR_PERSONA,
        payload: respuesta.data.data,
      })
    } catch (error) {
      console.log('error')
    }
  }

  const crearMensaje = (mensaje) => {
    dispatch({
      type: CREATE_MESSAGE,
      payload: mensaje,
    })

    setTimeout(() => {
      dispatch({
        type: DELETE_MESSAGE,
      })
    }, 3000)
  }

  const crearPersona = async (datos) => {
    try {
      const respuesta = await clienteAxios.post('items/persona', datos)

      dispatch({
        type: CREAR_PERSONA,
        payload: respuesta.data.data,
      })

      crearMensaje({ tipo: 'success', msg: 'Creado Correctamente' })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PersonaContext.Provider
      value={{
        personas: state.personas,
        loading: state.loading,
        message: state.message,
        listarPersonas,
        crearPersona,
      }}
    >
      {props.children}
    </PersonaContext.Provider>
  )
}

export default PersonaState

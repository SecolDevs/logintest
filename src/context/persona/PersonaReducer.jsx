import {
  CREAR_PERSONA,
  LISTAR_PERSONA,
  ELIMINAR_PERSONA,
  CREATE_MESSAGE,
  DELETE_MESSAGE,
} from './../../types'

const PersonaReducer = (state, action) => {
  switch (action.type) {
    case LISTAR_PERSONA:
      return {
        ...state,
        personas: action.payload,
        loading: false,
      }
    case CREAR_PERSONA:
      return {
        ...state,
        personas: [...state.personas, action.payload],
      }
    case ELIMINAR_PERSONA:
      return {
        ...state,
      }
    case CREATE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      }
    case DELETE_MESSAGE:
      return {
        ...state,
        message: null,
      }
    default:
      return state
  }
}

export default PersonaReducer

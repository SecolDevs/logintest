import { useContext, useState } from 'react'
import PersonaListado from './PersonaListado'

import PersonaContext from './../context/persona/PersonaContext'
import Alerta from './Alerta'

const PersonaForm = () => {
  const personaContext = useContext(PersonaContext)
  const { message, crearPersona } = personaContext

  const [persona, setPersona] = useState({
    nombre: '',
    edad: '',
  })

  const handleChange = (e) => {
    setPersona({
      ...persona,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setPersona({
      nombre: '',
      edad: '',
    })

    crearPersona(persona)
  }

  const { nombre, edad } = persona

  return (
    <div className="mt-5 bg-secondary p'5">
      <h2>Nueva Persona</h2>
      <div className="container">
        {message ? <Alerta tipo={message.tipo} msg={message.msg} /> : null}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              id="nombre"
              value={nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="edad">Edad:</label>
            <input
              className="form-control"
              type="number"
              name="edad"
              id="edad"
              value={edad}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Crear
          </button>
        </form>
      </div>
      <hr />
      <PersonaListado />
    </div>
  )
}

export default PersonaForm

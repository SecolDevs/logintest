import { useEffect, useContext } from 'react'
import PersonaContext from './../context/persona/PersonaContext'

const PersonaListado = () => {
  const personaContext = useContext(PersonaContext)
  const { personas, loading, listarPersonas } = personaContext

  useEffect(() => {
    listarPersonas()
  }, [])
  return (
    <div className="container">
      <h2>Listado</h2>
      {loading ? (
        <h4>Cargando...</h4>
      ) : personas ? (
        personas.map(({ id, nombre, edad }) => (
          <div key={id} className="d-inline">
            <p key={id}>
              Nombre: {nombre} | Edad: {edad}
              <button className="btn btn-danger rounded-pill ml-5">x</button>
            </p>
          </div>
        ))
      ) : null}
    </div>
  )
}

export default PersonaListado

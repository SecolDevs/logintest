import { useState, useContext } from 'react'
import AuthContext from './../context/auth/AuthContext'

const LoginForm = () => {
  // extraer los valores del context
  const authContext = useContext(AuthContext)
  const { iniciarSession } = authContext

  const [datos, setDatos] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const handleSumbit = (e) => {
    e.preventDefault()

    iniciarSession(datos)
  }

  const { email, password } = datos

  return (
    <div className="container mt-5">
      <form onSubmit={handleSumbit} className="p-5 bg-secondary">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-success float-center" type="submit">
          Iniciar Sesion
        </button>
      </form>
    </div>
  )
}

export default LoginForm

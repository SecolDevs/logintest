import { useContext } from 'react'
import AuthContext from './../context/auth/AuthContext'

const LogoutButton = () => {
  const authContext = useContext(AuthContext)
  const { cerrarSession } = authContext

  const handleClick = () => {
    cerrarSession()
  }

  return (
    <div className="mt-5 container">
      <button className="btn btn-danger btn-block" onClick={handleClick}>
        Cerrar Session
      </button>
    </div>
  )
}

export default LogoutButton

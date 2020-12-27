import clienteAxios from './clienteAxios'

const tokenAuth = (token) => {
  if (token) {
    clienteAxios.defaults.headers.common['Authorization'] = `bearer ${token}`
  } else {
    delete clienteAxios.defaults.headers.common['Authorization']
  }
}

export default tokenAuth

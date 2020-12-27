const Alerta = ({ tipo, msg }) => {
  return <div className={`alert alert-${tipo}`}>{msg}</div>
}

export default Alerta

import React from 'react'

const Boton = ({inhabilitado}) => {
  return (
    <button disabled={inhabilitado} className='btn btn-primary'> Enviar </button>
  )
}

export default Boton
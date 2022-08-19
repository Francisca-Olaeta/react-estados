import React from 'react'

const Boton = ({habilitado}) => {
  return (
    <button disabled={habilitado} className='btn btn-primary'>Enviar</button>
  )
}

export default Boton
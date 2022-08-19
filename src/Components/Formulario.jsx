import React from 'react';
import Boton from './Boton';

const Formulario = ({nombre, password, cambiarNombre, cambiarPassword}) => {
    

  return (
    <>
    <form className='formulario' action="">
        <div className='form-group mb-3'>
            <label name='Nombre' htmlFor="">Nombre</label>
            <input 
            className='form-control' 
            type="text" 
            placeholder='Ingresa tu nombre'
            value={nombre}
            onChange={cambiarNombre}
            />
            {nombre === '' && password === '252525' ? <p className='text-danger'>Debes ingresar tu nombre</p> : null}
        </div>

        <div className='form-group mb-3'>
            <label name='Password' htmlFor="">Contraseña</label>
            <input 
            className='form-control' 
            type="password" 
            placeholder='Ingresa tu contraseña'
            value={password}
            onChange={cambiarPassword}
            />
        </div>

        {password === '252525' ? <Boton inhabilitado={false} /> : <Boton inhabilitado={true} /> }
       
    </form>
  </>
  )
}

export default Formulario
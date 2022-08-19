import React from 'react';
import { useState } from 'react';
import Boton from './Boton';
import Input from './Input';

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")
    const [habilitado, setHabilitado] = useState(true)

  return (
    <form className='formulario'>
        <Input 
        label='Nombre' 
        type='text' 
        placeholder='Nombre' 
        value='' 
        setHabilitado={setHabilitado} 
        />


        <Input 
        label='Contraseña' 
        type='password' 
        placeholder='Contraseña' 
        setHabilitado={setHabilitado} 
        />
       
    
        <Boton habilitado={habilitado}>Enviar</Boton>
       
    

    </form>
  )
}

export default Formulario
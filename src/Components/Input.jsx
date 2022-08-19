import React from 'react'

export const Input = ({label, type, placeholder, setHabilitado}) => {
  return (
    <div className='form-group mb-3'>
        <label htmlFor="">{label}</label>
        <input 
        className='form-control' 
        type={type} 
        placeholder={placeholder} 
        setHabilitado={setHabilitado} 
        onChange={(e)=> e.target.value ==='252525' ? setHabilitado(false) : setHabilitado(true)}>
            
        </input>

    </div>
  )
}
export default Input

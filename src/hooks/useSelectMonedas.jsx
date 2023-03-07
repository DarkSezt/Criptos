import styled from '@emotion/styled'
import {useState} from 'react'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0 15px 0;

`

const Select = styled.select`
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    
    
`
const useSelectMonedas = (label,opciones) => {

    const [state, setState]= useState('')
  const SelectMonedas = () =>(
    <>
        <Label htmlFor="">{label}</Label> 
        <Select
            value={state}
            onChange={(e)=> setState(e.target.value)}>
            <option value="">Seleccione</option>
            {opciones.map((opcion)=>(
                <option
                    key={opcion.id}
                    value={opcion.id}
                >{opcion.nombre}

                </option>
            ))}
        </Select>
    </>
  )

  return [state,SelectMonedas]
}

export default useSelectMonedas
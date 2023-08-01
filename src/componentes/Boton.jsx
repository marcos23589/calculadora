import '../css/Boton.css'
import React from 'react';

export function Boton (props) {
    
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.' && (valor !== '='))
    }

    return(
        <button 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador':''}`.trimEnd()}
        onClick={()=> props.manejarClick(props.children)}>
            {props.children}
        </button>
    )
}

export function BotonClear (props) {
    return(
    <div className='boton-clear'
        onClick={props.manejarClear}>
        {props.children}    
    </div>
    )
}
import './App.css';
import React, { useState } from 'react';
import { Boton, BotonClear} from './componentes/Boton';
import { Pantalla } from './componentes/Pantalla';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const agregarInput = (val) => {
    setInput(input+val)
  }

  const borrarInput = () => {
    setInput(input.slice(0,-1))    
  }

  const calcular = () => {
    try{
      input ? setInput(evaluate(input)) : alert("Ingrese valor!")
    } 
    catch(error){
      console.log('Error:', error);
      }
  }

  const clear = () => {
    setInput("")
  }
  
  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <BotonClear manejarClear = {clear}>AC</BotonClear>
          <Boton manejarClick = {borrarInput}>C</Boton>
          <Boton manejarClick = {agregarInput}>(</Boton>
          <Boton manejarClick = {agregarInput}>)</Boton>
        </div>
        <div className='fila'>
          
          <Boton manejarClick = {agregarInput}>7</Boton>
          <Boton manejarClick = {agregarInput}>8</Boton>
          <Boton manejarClick = {agregarInput}>9</Boton>
          <Boton manejarClick = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {agregarInput}>4</Boton>
          <Boton manejarClick = {agregarInput}>5</Boton>
          <Boton manejarClick = {agregarInput}>6</Boton>
          <Boton manejarClick = {agregarInput}>/</Boton>
          
        </div>
        <div className='fila'>
          <Boton manejarClick = {agregarInput}>1</Boton>
          <Boton manejarClick = {agregarInput}>2</Boton>
          <Boton manejarClick = {agregarInput}>3</Boton>
          <Boton manejarClick = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {agregarInput}>0</Boton>
          <Boton manejarClick = {agregarInput}>.</Boton>
          <Boton manejarClick = {agregarInput}>%</Boton>
          <Boton manejarClick = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick = {calcular}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;

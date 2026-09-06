'use client'
import './style.css'
import { useState } from 'react';


export default function Imc() {

        const [peso, setPeso] = useState('');
        const [altura, setAltura] = useState('');
        const [resultado, setResultado] = useState('');

function CalculoImc() {
    
    
    const p = parseFloat(peso);
    const a = parseFloat(altura); 

    const imc = p / (a * a);
    
    if(imc < 18.5) {
        setResultado('Abaixo do peso');
    }
    else if(imc >= 18.5 && imc < 25) {
        setResultado('Peso normal');
    }
    else if(imc >= 25 && imc < 30) {
        setResultado('Sobrepeso');
    }
    else {
        setResultado('Obesidade');
    }
};

    return (
        <div className="container">
            <h1>Calculadora de IMC</h1>
            <hr />
            <p>IMC = peso / (altura * altura)</p>

            <p>Digite seu Peso:</p>
            <input
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            type="number"
             placeholder="Peso (kg)"
             className="input-text" />

            <p>Digite sua Altura:</p>
            <input
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            type="number"
             placeholder="Altura (m)"
             className="input-text" />

            <button className="btn"
                    onClick={CalculoImc}>
                Calcular
            </button>

            <hr />
            <p>Resultado: {resultado}</p>

        </div> 
    )
}
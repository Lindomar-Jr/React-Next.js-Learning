'use client'

import { useState } from "react";

export default function Estado() {

    //let numero = 0;
    let [numero, setNumero] = useState(0);
    function incrementar() {
        //numero = numero += 1;
        setNumero(numero + 1);
    }

    function decrementar() {
        //numero = numero -= 1;
        setNumero(numero - 1);
    }

  return (
/*testar console.log() , o valor ta sendo incrmentado,tanto no console quanto na tela,
 pq o react ta atualizando o estado do componente, pq agora ta usando o useState*/ 
    <div>
      <h1>Estado</h1>
      <button onClick={incrementar} className="bg-green-200 hover:bg-green-600">Incrementar</button>

      <br />

      <button onClick={decrementar} className="bg-red-200 hover:bg-red-600">Decrementar</button>
      <p>O valor do número é: {numero}</p>
       
    </div>
  );
}
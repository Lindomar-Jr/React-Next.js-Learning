'use client'
export default function Estado() {

    let numero = 0;

    function incrementar() {
        numero = numero += 1;
        console.log( "numero:" + numero);
    }

  return (
/*testar console.log() , o valor ta sendo incrmentado, mas não ta sendo atualizado na tela,
 pq o react não ta atualizando o estado do componente, pq não ta usando o useState*/
    <div>
      <h1>Estado</h1>
      <button onClick={incrementar} className="bg-amber-400 hover:bg-amber-500">Incrementar</button>
      <p>O valor do número é: {numero}</p>
    </div>
  );
}
import Image from 'next/image'

export default function Main (props: any) {
  return (
    <div className="bg-orange-400">
      <h1>Main:</h1>
      <p>{props.conteudoprincipal}</p>
      <p>{props.conteudo}</p>
    
      <Image className="imagem-foto" src="/img/Foto - @joaoluccas-138.jpg" alt="imagem-casal" width={100} height={100} />
        {props.children}
      <hr/>

    </div>
  );
}
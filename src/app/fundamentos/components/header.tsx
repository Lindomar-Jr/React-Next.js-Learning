//CRIANDO UM COMPONENTE
function Nossahistoria () {
    return (
        <div>
            <h1>Nossa História:</h1>
            <p>Empresa fundada em 2026 com o objetivo de oferecer soluções inovadoras.</p>
        </div>
    )
} 
    
//
export default function Header (props: any) {
  const nome = "Lindomar";
  return (
    <div className="bg-green-400">
      <p>{props.titulo}</p>
      <p>{props.subtitulo}</p>
      <Nossahistoria />
      <hr/>
    </div>
  );
}
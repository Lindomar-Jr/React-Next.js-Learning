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
export default function Header () {
  const nome = "Lindomar";
  return (
    <div>
      <h1>Header:</h1>
      <p>Bem-vindo à nossa empresa {nome}! Estamos comprometidos em fornecer os melhores serviços aos nossos clientes.</p>
      <Nossahistoria />
      <hr/>
    </div>
  );
}
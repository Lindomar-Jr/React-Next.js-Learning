//importando os componentes Header, Main e Footer para a página Principal
import  Footer from "@/app/fundamentos/components/footer";
import Header from "@/app/fundamentos/components/header"; 
import Main from "@/app/fundamentos/components/main"; 

export default function Principal () {
    return (
        //adicionando componentes Header, Main e Footer na página Principal
        <div>
            <Header titulo="Página Principal Teste de props"
            subtitulo="Subtítulo da página principal Teste de props" />
            <Main />
            <Footer message="Este é um exemplo de mensagem passada como propriedade."
            subtitulo = "Exemplo de uma segunda propriedade."
            />
            <hr />

            <p>reaproveitando o componente Footer, mas passando novas propriedades para ele:</p>
            <Footer message="Este é um exemplo de mensagem passada como propriedade para um novo componente"
            subtitulo = "Exemplo de uma segunda propriedade dentro do novo componente."
            />
        </div>
    ); 
 }
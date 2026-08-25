//importando os componentes Header, Main e Footer para a página Principal
import  Footer from "@/components/footer";
import Header from "@/components/header"; 
import Main from "@/components/main"; 

export default function Principal () {
    return (
        //adicionando componentes Header, Main e Footer na página Principal
        <div>
            <Header />
            <Main />
            <Footer message="Este é um exemplo de mensagem passada como propriedade."
            subtitulo = "Exemplo de uma segunda propriedade."
            />
            <hr />

            //reaproveitando o componente Footer, mas passando novas propriedades para ele.
            <Footer message="Este é um exemplo de mensagem passada como propriedade para um novo componente"
            subtitulo = "Exemplo de uma segunda propriedade dentro do novo componente."
            />
        </div>
    ); 
 }
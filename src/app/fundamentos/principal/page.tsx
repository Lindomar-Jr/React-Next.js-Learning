
//REUTILIZANDO COMPONENTE 
import  Footer from "@/app/fundamentos/components/footer";
import Header from "@/app/fundamentos/components/header"; 
import Main from "@/app/fundamentos/components/main"; 

export default function Principal () {
    return (
        <div>
            <Header
                titulo="Bem-vindo à página principal!"
                subtitulo="Esta é a página principal do nosso aplicativo."
            />
                
            <Main
                conteudoprincipal="Este é o conteúdo principal da página."
                conteudo="Este é o conteúdo da página.">
               
                <p>
                Nossa história é o que temos de mais orgulho.
                Nosso amor é o que nos mantém unidos.
                </p>
            </Main>

            <Footer
                message="Obrigado por visitar nosso site!"
            />
        </div>
    ); 
 }
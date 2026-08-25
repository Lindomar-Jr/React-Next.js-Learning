//REUTILIZANDO COMPONENTE 
import  Footer from "@/components/footer";
import Header from "@/components/header"; 
import Main from "@/components/main"; 

export default function Principal () {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    ); 
 }
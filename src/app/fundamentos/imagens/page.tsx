import Image from 'next/image'
import "@/app/estilo.css";

export default function page() {
    return(
        <div className="imagem-page">
            <h1 className="imagem-title">Casamento em búzios</h1>
            <div className="imagem-container">
                <Image className="imagem-foto" src="/img/Foto - @joaoluccas-138.jpg" alt="imagem-casal" width={300} height={300} />
            </div>
            <footer className="imagem-footer">Foto: @joaoluccas</footer>
        </div>
    )
}
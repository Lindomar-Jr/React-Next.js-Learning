import MenuItem from "./components/MenuItem";
import "@/app/menu/estilo.css"

export default function Principal() {
    return (
        <div className="Menu">

            <MenuItem texto="Início" rota="/menu" />

            <MenuItem texto="Sobre" rota="/menu/sobre" />

            <MenuItem texto="Contato" rota="/menu/contato" />

            <MenuItem texto="projetos" rota="/menu/projetos" />

        </div>
    )
}
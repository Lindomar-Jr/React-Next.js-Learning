import Link from "next/link";
import "@/app/menu/estilo.css"

  interface MenuItemProps {
        texto : string;
        rota : string;
    }

    export default function MenuItem(props: MenuItemProps) {
        return(
            <div>
                <Link href={props.rota} className="MenuItem">
                        {props.texto}
                </Link>
            </div>
        )
}
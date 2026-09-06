//import "@/app/estilo.css"

export default function Lista() {
    
        const usuarios = [
    {id: 1, nome: "João", idade: 25},
    {id: 2, nome: "Maria", idade: 30},
    {id: 3, nome: "Pedro", idade: 20},
    {id: 4, nome: "Ana", idade: 28}
]

    const lista = usuarios.map(usuario => (
       <li key={usuario.id}>
            {usuario.nome} - {usuario.idade} anos
        </li> 
    ))

    return (
        <div className="">
            <h1>Lista de Usuários:</h1>
            <ul>
                {lista}
            </ul>
        </div>
    )
}
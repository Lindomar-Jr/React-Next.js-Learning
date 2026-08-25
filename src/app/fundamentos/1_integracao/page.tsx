// integração de código jsx
export default function Page() {

    const usuario = {
        nome: "João",
        idade: 30,
        email: "joao@example.com"
    };

    return (
        <div>
            <h1>Integração código jsx:</h1>
            <p> O usuario é {usuario.nome}, possui {usuario.idade} anos e seu contato é: {usuario.email} </p>
        </div>
    );
}
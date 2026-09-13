// Comunicação direta: o componente pai envia dados para o filho por meio de props.

interface MensagemProps {
    mensagem: string;
}

function Mensagem({ mensagem }: MensagemProps) {
    return <p>Mensagem recebida pelo filho: {mensagem}</p>;
}

export default function ComunicacaoDireta() {
    const mensagemDoPai = 'Olá, componente filho!';

    return (
        <main>
            <h1>Comunicação direta</h1>
            <p>O pai envia informações diretamente para o filho usando uma prop.</p>

            {/* A prop mensagem faz o caminho do componente pai para o componente filho. */}
            <Mensagem mensagem={mensagemDoPai} />
        </main>
    );
}

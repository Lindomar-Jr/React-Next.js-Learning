'use client';

import { useState } from 'react';

interface FormularioProps {
    aoEnviar: (mensagem: string) => void;
}

function Formulario({ aoEnviar }: FormularioProps) {
    const [mensagem, setMensagem] = useState('');

    function enviarMensagem() {
        // O filho não altera o estado do pai diretamente: ele chama a função recebida por prop.
        aoEnviar(mensagem);
        setMensagem('');
    }

    return (
        <div>
            <input
                value={mensagem}
                onChange={(evento) => setMensagem(evento.target.value)}
                placeholder="Digite uma mensagem"
            />
            <button type="button" onClick={enviarMensagem}>
                Enviar para o pai
            </button>
        </div>
    );
}

export default function ComunicacaoIndireta() {
    const [mensagemRecebida, setMensagemRecebida] = useState('Nenhuma mensagem recebida.');

    return (
        <main>
            <h1>Comunicação indireta</h1>
            <p>O filho envia informações para o pai por meio de uma função de callback.</p>

            {/* O pai passa uma função; quando o filho a chama, o estado do pai é atualizado. */}
            <Formulario aoEnviar={setMensagemRecebida} />
            <p>Mensagem recebida pelo pai: {mensagemRecebida}</p>
        </main>
    );
}

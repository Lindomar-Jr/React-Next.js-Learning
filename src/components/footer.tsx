export default function Footer( props: any) {
    return (
    <div>
        <h1>Footer:</h1>
        <p>Obrigado por visitar nosso site! Entre em contato conosco para mais informações.</p>
        <p>{props.message}</p>
        <p>{props.subtitulo}</p>
    </div>
    );
}
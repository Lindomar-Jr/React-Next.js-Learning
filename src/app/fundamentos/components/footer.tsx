export default function Footer( props: any) {
    return (
    <div className="bg-blue-400">
        <h1>Footer:</h1>
        <p>{props.message}</p>
    </div>
    );
}
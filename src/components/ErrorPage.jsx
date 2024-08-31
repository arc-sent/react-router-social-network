import { Link, useRouteError } from "react-router-dom";
const styleLink = {
    color: '#fff',
    textAligth: 'center',
    textDecoration: 'none',
}
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="wrapperError">
            <h1 className="hError">Упс, произошла ошибка!</h1>
            <p style={styleLink}>
                {error.statusText || error.message}
            </p>
            <Link to='/' style={styleLink}>Вернуться на главную страницу</Link>
        </div>
    )
}
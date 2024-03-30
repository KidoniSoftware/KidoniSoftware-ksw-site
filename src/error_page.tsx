import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as Error;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <b>{error.name}</b>
                <i>{error.message}</i>
            </p>
        </div>
    );
}
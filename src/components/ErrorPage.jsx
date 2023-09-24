import { useRouteError } from "react-router-dom";   

function ErrorPage() {
    const error = useRouteError();

    return(
        <>
            <div className="">Pages Not Found !!!</div>
        </>
    )
}

export default ErrorPage
import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    const err = useRouteError();
    console.error(err);

    return(
        <section className="error-page">
            <h2>Uh Oh!</h2>
            <p>Looks like an error occured.  It's probably your fault, but I won't tell anyone...</p>
        </section>
    );
};
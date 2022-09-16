import urlScript from 'url:./urlScript';

const ComponentWithUrlScript = () => {
    console.log(urlScript);
    return (
        <>
            <p>I do nothing really, just importing a script as url.</p>
            <p>But this script imports that react package that imports icons!</p>
        </>
    )
}

export default ComponentWithUrlScript;

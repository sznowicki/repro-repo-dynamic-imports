import React from 'react';
import { createRoot } from 'react-dom/client';
import Component2 from "./component";
import ComponentWithUrlScript from "./componentWithUrlScript";

const App = () => {
    return (
        <>
            <h1>Hello world</h1>
            <Component2 />
            <ComponentWithUrlScript />
        </>
    )
};

const main = () => {
    const root = createRoot(document.getElementById('root'));
    root.render(<App />);
}

main();

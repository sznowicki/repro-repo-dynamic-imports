import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Component from "./component";

const App = () => {
    return (
        <>
            <h1>Hello world</h1>
            <h2>Dynamic import</h2>
            <Component />
        </>
    )
};

const main = () => {
    const root = createRoot(document.getElementById('root'));
    root.render(<App />);
}

main();

import React from 'react';
import { IconAsChunk } from "@eskalacja/tmp-repro-dynamic-imports";

const DummyComponent = () => {
    console.log('I am a component from meta package');

    return (
        <div>
            <p>Icon from meta component:</p>
            <p><IconAsChunk name="123" /></p>
        </div>
    )
}

export default DummyComponent;

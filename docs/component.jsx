import React from 'react';
import { DummyComponent } from "@eskalacja/tmp-repro-dynamic-imports-meta";
/**
 * @type {Map}
 */

const Component = () => {
    return (
        <>
            <div style={{
                maxWidth: '500px',
                width: '100%',
                padding: '1rem',
                display: 'grid',
            }}>
                <div>
                    I import icon from a package that imports icon package.
                </div>
                <div>
                    <DummyComponent />
                </div>
            </div>
        </>
    )
}

export default Component;

import React, { useEffect, useState } from 'react';
import all from './map';

export const useIconChunk = name => {
    const [Component, setComponent] = useState(() => () => null);
    useEffect(() => {
        const importer = all.get(name);

        if (!importer) {
            console.warn(`Icon ${name} is not available`);
            return;
        }

        importer().then(el => setComponent(() => el.default));
    }, [name]);
    return Component;
};
export const IconAsChunk = ({
    name
}) => {
    const IconFromChunk = useIconChunk(name);
    return /*#__PURE__*/React.createElement(IconFromChunk, null);
};

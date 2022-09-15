import React, {useEffect, useState} from 'react';
/**
 * @type {Map}
 */
import icons from '@eskalacja/tmp-repro-dynamic-imports';

const names = [...icons.keys()];

console.log(names);
const Component = () => {
    const [name, setName] = useState(names[0]);
    const [Icon, setIcon] = useState(() => () => null);

    useEffect(() => {
        const getter = icons.get(name);
        if (!getter) {
            console.warn('Invalid icon name selected!');
            return;
        }
        getter().then(el => {
            setIcon(() => el.default);
        })
    }, [name]);
    return (
        <>
            <select onChange={(event) => setName(event.target.value)}>
                {
                    names.map((n) => (
                        <option key={n} value={n}>{n}</option>
                    ))
                }
            </select>
            <div style={{
                maxWidth: '500px',
                width: '100%',
                padding: '1rem',
                display: 'grid',
            }}>
                <div>
                    This is an icon:.
                </div>
                <div>
                    <Icon />
                </div>
            </div>
        </>
    )
}

export default Component;

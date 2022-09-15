const { readdirSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const getWriteFileName = (name) => (
    resolve(
        __dirname,
        '../src/',
        name,
    )
);

const main = () => {
    const files = readdirSync(resolve(
        __dirname,
        '../src/icons',
    ));

    const iconNames = files.reduce((acc, curr) => {
        if (curr === 'index.jsx') {
            return acc;
        }

        acc.push(curr.replace('.jsx', ''));

        return acc;
    }, []);

    const js = ['const map = new Map();'];
    // eslint-disable-next-line no-restricted-syntax
    for (const name of iconNames) {
        const filename = `./icons/${name}`;
        js.push(`map.set('${name.toLowerCase()}', () => import('${filename}'));`);
    }
    js.push('export default map');

    const jsString = js.join('\n');

    writeFileSync(
        getWriteFileName('index.js'),
        jsString,
    );
};

main();

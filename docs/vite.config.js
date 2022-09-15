// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import analyze from 'rollup-plugin-analyzer';

const shouldAnalyze = !!process.env.BUILD_ANALYZE;

const rollupPlugins = shouldAnalyze ? [
    analyze(),
] : undefined;

export default defineConfig({
    plugins: [
        react(),
    ],
    output: {
        interop: 'auto',
        inlineDynamicImports: true,
    },
    optimizeDeps: {
        disabled: false,
        include: [
            '@eskalacja/tmp-repro-dynamic-imports',
            'react',
        ],
        force: true,
    },
    build: {
        target: [
            'chrome100',
            'safari15',
            'firefox100',
        ],
        rollupOptions: {
            plugins: rollupPlugins,
        },
        commonjsOptions: {
            include: [
                'react',
            ],
            transformMixedEsModules: true,
        },
    },
});

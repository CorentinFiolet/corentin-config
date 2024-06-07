import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        name: 'eslint-config-corentin-config',
        rules: {
            'no-console': 'warn',
        },
    },
    {
        ignores: ['**/node_modules/**', 'dist/**'],
    },
];

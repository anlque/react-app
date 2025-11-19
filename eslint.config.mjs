import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import i18next from 'eslint-plugin-i18next';
import pluginJest from 'eslint-plugin-jest';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    i18next.configs['flat/recommended'],
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js, 'simple-import-sort': simpleImportSort },
        extends: ['js/recommended'],
        languageOptions: {
            globals: {
                __IS_DEV__: true,
                __dirname: true,
                ...globals.browser,
                ...pluginJest.environments.globals.globals,
            },
        },
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [
                1,
                { extensions: ['.js', '.jsx', '.tsx'] },
            ],
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            'react/button-has-type': 'error',
            'react/jsx-props-no-spreading': 'warn',
            'object-curly-spacing': ['error', 'always'],
            curly: ['error', 'all'],
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^\\u0000'],
                        ['^react$', '^@?\\w'],
                        ['^@', '^'],
                        ['^\\./'],
                        ['^.+\\.(module.css|module.scss)$'],
                        ['^.+\\.(gif|png|svg|jpg)$'],
                    ],
                },
            ],
            'i18next/no-literal-string': [
                'warn',
                { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
            ],
            'max-len': ['error', { ignoreComments: true, code: 150 }],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
        },
    },
]);

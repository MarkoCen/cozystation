import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const files = ['**/*.{jsx,tsx}'];

/** @type {import('eslint').Linter.Config[]} **/
const rules = [
  {
    name: 'react-recommended',
    files,
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    name: 'react-jsx-runtime',
    files,
    ...react.configs.flat['jsx-runtime'],
    languageOptions: {
      ...react.configs.flat['jsx-runtime'].languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    name: 'react-hooks',
    files,
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': hooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      ...hooks.configs.recommended.rules,
    },
  },
];

export default rules;

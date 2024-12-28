import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} **/
const rules = [
  eslint.configs.recommended,
  {
    name: 'typescript',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        projectService: true,
      },
    },
  },
  ...tsEslint.configs.recommendedTypeChecked.map((config) => ({
    files: ['**/*.ts', '**/*.tsx'],
    ...config,
  })),
];

export default rules;

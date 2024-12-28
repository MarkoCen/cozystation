import json from 'eslint-plugin-json';

/** @type {import('eslint').Linter.Config[]} **/
const rules = [
  {
    name: 'json',
    files: ['**/*.json'],
    ...json.configs.recommended,
  },
];

export default rules;

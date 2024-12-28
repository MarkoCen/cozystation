import tailwind from 'eslint-plugin-tailwindcss';

/** @type {import('eslint').Linter.Config[]} **/
const rules = [
  ...tailwind.configs['flat/recommended'].map((c) => ({
    ...c,
    name: 'tailwind',
  })),
];

export default rules;

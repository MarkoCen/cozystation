import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} **/
const rules = [
  {
    name: 'import',
    files: ['**/*.{ts,tsx}', '**/*.{js,jsx,mjs}'],
    ...importPlugin.flatConfigs.recommended,
    rules: {
      'import/no-namespace': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@remix/**',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'object', 'type'],
          alphabetize: { order: 'asc', orderImportKind: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
    },
  },
];

export default rules;

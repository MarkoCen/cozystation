import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} **/
const rules = [
  {
    ...eslintPluginPrettier,
    name: 'prettier',
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          bracketSameLine: false,
          bracketSpacing: true,
          endOfLine: 'lf',
          htmlWhitespaceSensitivity: 'css',
          jsxSingleQuote: true,
          printWidth: 100,
          proseWrap: 'preserve',
          quoteProps: 'as-needed',
          semi: true,
          useTabs: false,
          trailingComma: 'all',
          tabWidth: 2,
          singleQuote: true,
          singleAttributePerLine: true,
        },
      ],
    },
  },
];

export default rules;

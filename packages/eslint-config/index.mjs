import tsEslint from 'typescript-eslint';

import importRules from './rules/import.mjs';
import json from './rules/json.mjs';
import prettier from './rules/prettier.mjs';
import react from './rules/react.mjs';
import tailwind from './rules/tailwind.mjs';
import typescript from './rules/typescript.mjs';

const baseConfig = tsEslint.config(
  ...typescript,
  ...react,
  ...tailwind,
  ...importRules,
  ...json,
  ...prettier,
);

export default baseConfig;

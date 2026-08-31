import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  stylistic.configs.recommended,
  // Override default ignores of eslint-config-next.
  {
    rules: {
      'quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: false }],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
      '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1 }],
      'no-trailing-spaces': 'error',
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;

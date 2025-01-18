import nodePlugin from 'eslint-plugin-node';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: {
      prettier,
      node: nodePlugin,
    },
    rules: {
      // Reglas recomendadas de ESLint
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'node/no-unsupported-features/es-syntax': 'off',
      'node/no-missing-import': 'off',
      'node/no-unpublished-import': 'off',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];

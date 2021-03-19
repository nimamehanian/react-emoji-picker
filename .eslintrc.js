const env = { browser: true, es6: true, node: true };

module.exports = {
  root: true,
  env,
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    'eslint:recommended',
  ],
  // TYPESCRIPT:
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    env,
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      eqeqeq: ['error', 'always'],
    }
  }],
};

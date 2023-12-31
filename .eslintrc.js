module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
};

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    complexity: ['error', 7],
    'react/jsx-uses-react': 'error',
    'no-shadow': 'off',
    'max-lines': ['error', { max: 300, skipBlankLines: true }],
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

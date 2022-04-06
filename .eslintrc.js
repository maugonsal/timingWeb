module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'prettier',
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
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-curly-spacing': 0,
    'react/jsx-equals-spacing': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-props-no-multi-spaces': 0,
    'react/self-closing-comp': 0,
    'no-use-before-define': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-properties': [
      0,
      {
        object: 'Math',
        property: 'pow',
      },
    ],
    'no-useless-constructor': 0,
    'react/jsx-curly-newline': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
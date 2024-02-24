module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-role': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        'labelComponents': [
          'label'
        ],
        'labelAttributes': [
          'htmlFor'
        ],
        'controlComponents': [
          'MPTextBox'
        ],
        'depth': 1
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
}

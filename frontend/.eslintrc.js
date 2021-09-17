module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['external', 'parent', 'sibling', 'builtin', 'index'],
        alphabetize: {
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '**',
            group: 'external',
            position: 'before',
          },
        ],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreMemberSort: false,
        ignoreDeclarationSort: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};

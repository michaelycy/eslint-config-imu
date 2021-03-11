module.exports = {
  env: { 'jest/globals': true },
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest', 'unicorn'],
  rules: {},
};

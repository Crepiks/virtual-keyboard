module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never' }],
  },
};

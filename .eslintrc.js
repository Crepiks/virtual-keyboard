module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: ['airbnb-base/legacy', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};

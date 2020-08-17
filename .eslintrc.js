module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2020': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 11,
  },
  'rules': {
    'max-len': ['error', {code: 120}],
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
  },
};

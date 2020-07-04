module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/script-indent': ['error', 2, { 'baseIndent': 0 }],
    'properties': 0,
    'indent': ['error', 2],
    'vue/no-parsing-error': [
      'error',
      {
        'control-character-in-input-stream': false
      }
    ],
    'quotes': ['error', 'single'],
    'no-prototype-builtins': 0
  }
}

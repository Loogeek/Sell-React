module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": 'module',
    "ecmaFeatures": {
      "jsx": true
    },
    "experimentalObjectRestSpread": true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': 0,
    'space-before-function-paren': 0,
    'semi': [1, "always"],
    'no-unused-vars': 0,
    'no-undef': 1,
    'no-trailing-spaces': 0,
    'handle-callback-err': 0,
    'no-multi-spaces': 0,
    'operator-linebreak': 0,
    'eol-last': 0
  },
  'globals': {
     'fetch': true
  }
}

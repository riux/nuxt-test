module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "no-console": "off",
    'vue/html-self-closing': 'off',
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-function-paren": ["error", "never"],
    "no-unused-vars": ["warn"],
    "spaced-comment": ["off"],
    "vue/no-unused-components": ["warn"],
    'vue/no-unused-vars': ["warn"],
    'no-undef' : 'off',
    'eol-last' : 'off',
    'no-trailing-spaces': 'off',
    'no-useless-escape': 'off',
    'space-before-blocks': 'off'
  }
}

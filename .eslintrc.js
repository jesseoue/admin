module.exports = {
  extends: ['@nekohack/eslint-config-vue'],
  plugins: ['@typescript-eslint'],
  root: true,
  env: { node: true, es6: true },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-slot-scope-attribute': 'off'
  }
}

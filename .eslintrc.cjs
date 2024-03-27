/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules:{
    "no-unused-vars": 2, //開啟偵測 未使用的變數
    "indent": ['error', 2], //開啟偵測 縮進編排2格
  }
}

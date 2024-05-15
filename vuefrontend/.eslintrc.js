module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true // Add this line to support ES2021 syntax
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 12, // Use ES2021 version for modern syntax
    sourceType: 'module',
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: 'vue-eslint-parser', // new
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser', // new
    tsconfigRootDir: __dirname, // new
    project: ['tsconfig.json'], // new
    extraFileExtensions: ['.vue'] // new
  },
  plugins: [
    'vue',
    '@typescript-eslint' // new
  ],
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off' // new: 解决vite-env.d.ts报错
  }
}

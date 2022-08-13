module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect', // React version. 'detect' automatically picks the version you have installed.
    },
  },
  plugins: ['react-hooks', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    // 检查 Hook 的规则
    'react-hooks/rules-of-hooks': ['error'],
    // 检查 effect 的依赖
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        enableDangerousAutofixThisMayCauseInfiniteLoops: true,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
  },
}

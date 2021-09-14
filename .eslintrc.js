module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': 'off', // 开启规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'vue/no-deprecated-slot-attribute': 'off',
    // 'vue/no-deprecated-slot-scope-attribute': 'off',
    // 'nonblock-statement-body-position': 'off',
    // 'object-curly-newline': 'off',
    // 'linebreak-style': [0, 'error', 'windows'],
    // 'function-paren-newline': 'off',
    // 'no-unused-vars': 'off',
    semi: [2, 'always']
    // quotes: 0,
    // 'comma-dangle': ['error', 'never'],
    // // The rest are rules that you never need to enable when using Prettier.
    // 'array-bracket-newline': 'off',
    // 'array-bracket-spacing': 'off',
    // 'array-element-newline': 'off',
    // 'arrow-parens': 'off',
    // 'arrow-spacing': 'off',
    // 'block-spacing': 'off'
  }
};

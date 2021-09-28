module.exports = {
  'root': true,
  'extends': ['next/core-web-vitals'],
  'rules': {
    "@typescript-eslint/no-unused-vars": ['error', {
      'args': 'after-used',
      'varsIgnorePattern': '^_',
      'ignoreRestSiblings': true
    }],
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'block-scoped-var': 'off',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'curly': ['error', 'multi-line'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'indent': ['error', 2, { 'ignoredNodes': ['SwitchCase'] }],
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': ['error', 1],
    'no-async-promise-executor': 'error',
    'no-else-return': 'error',
    'no-import-assign': 'error',
    'no-prototype-builtins': 'off',
    'no-trailing-spaces': ['error', {
      'ignoreComments': true,
      'skipBlankLines': true
    }],
    'no-unused-vars': 'off',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never']
  }
}

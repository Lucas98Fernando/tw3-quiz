module.exports = {
  env: {
    browser: true,
    es2021: true,
    // extends: 'google',
    // quotes: [2, 'single'],
    // globals: {
    //   SwaggerEditor: false
    // },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};

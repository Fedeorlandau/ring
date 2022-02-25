const base = require('./_base.js');

module.exports = {
  ...base,
  plugins: [...base.plugins, 'testing-library'],
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb
    'airbnb',
    'airbnb-typescript',

    'plugin:testing-library/react',

    ...base.extends,
  ],
  rules: {
    ...base.rules,

    // https://www.npmjs.com/package/eslint-plugin-react
    'react/destructuring-assignment': 'error',
    'react/forbid-component-props': 'error',
    'react/jsx-props-no-spreading': 'error',
    'react/jsx-sort-props': 'error',
  },
};

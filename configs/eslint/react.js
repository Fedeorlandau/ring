const base = require("./_base");

base.overrides[0].extends.push("plugin:testing-library/react");

module.exports = {
  ...base,
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb
    "airbnb",
    "airbnb-typescript",

    ...base.extends,
  ],
  rules: {
    ...base.rules,

    // https://www.npmjs.com/package/eslint-plugin-react
    "react/destructuring-assignment": "error",
    "react/forbid-component-props": "error",
    "react/jsx-props-no-spreading": "error",
    "react/jsx-sort-props": "error",
  },
};

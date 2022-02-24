const react = require("./react");

base.overrides[0].extends.push("plugin:testing-library/react");

module.exports = {
  ...react,
  env: {
    ...react.env,
    browser: true,
  },
  extends: [
    // https://nextjs.org/docs/basic-features/eslint
    "next/core-web-vitals",

    ...react.extends,
  ],
  rules: {
    ...react.rules,

    // NextJS rules
    "@next/next/no-img-element": "off",
  },
};

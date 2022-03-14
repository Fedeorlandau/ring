module.exports = {
  ...require('@ring/config-eslint/react'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};

/** @type {import('eslint').Linter.Config} */
export default {
  parser: "@babel/eslint-parser",  // Use Babel parser to support modern syntax
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",  // Enable ES Modules
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",  // Base set of recommended rules
  ],
  rules: {
    // Your custom rules
  },
};

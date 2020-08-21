module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "typeorm", "graphql", "react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
  },
};

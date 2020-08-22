module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prettier/react"],
  plugins: [
    "plugin:react/recommended",
    "@typescript-eslint",
    "typeorm",
    "graphql",
    "react",
    "react-hooks",
  ],
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
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-unused-vars": "off",
  },
};

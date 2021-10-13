module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "import/prefer-default-export": "off",
    "no-useless-catch": "off",
    "no-control-regex": "off",
  },
};

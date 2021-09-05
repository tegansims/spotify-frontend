module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/jsx-indent": 1,
    quotes: [2, "double"],
    "comma-dangle": 0,
    indent: 0,
  },
};

// module.exports = {
//     extends: "airbnb",
//     plugins: ["react", "react-hooks"],
//     parser: "babel-eslint",
//     env: {
//       jest: true,
//     },
//     rules: {

//       "react/jsx-indent": 1,

//       "react/prop-types": "off",
//       quotes: [2, "double"],
//       semi: [2, "never"],
//       "comma-dangle": 0,
//       indent: 0,
//       "global-require": [0],
//       "no-console": "off"
//     },
//     globals: {
//       fetch: false
//     }
//   }

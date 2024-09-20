// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native", "react"],
  rules: {
    "prettier/prettier": "error",
    "react-native/no-unused-styles": "error", // this is not working
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

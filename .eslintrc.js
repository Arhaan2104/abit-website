/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "prettier"
  ],
  rules: {
    "prefer-const": "error",
  },
  root: true,
}
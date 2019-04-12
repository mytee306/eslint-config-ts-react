module.exports = {
  "extends": ["airbnb"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "implicit-arrow-linebreak": "off",
    "react/jsx-one-expression-per-line": "off",
    "@typescript-eslint/no-unused-vars": [2, { "args": "none" }]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".ts", ".tsx"]
      }
    }
  },
  "env": {
    "browser": true,
    "jest": true
  }
}

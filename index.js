module.exports = {
  "extends": ["airbnb"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }]
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

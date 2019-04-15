module.exports = {
  "extends": ["airbnb"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "implicit-arrow-linebreak": "off",
    "react/jsx-one-expression-per-line": "off",
    "@typescript-eslint/no-unused-vars": [2, { "args": "none" }],
    "function-paren-newline": "off",
    "react/prop-types": "off",
    "no-else-return": "off",
    "arrow-parens": "off",
    "linebreak-style": "off",
    "object-curly-newline": "off"
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
  },
  "overrides": [
    {
      "files": ["**/*.ts"],
      "rules": {
        "import/prefer-default-export": "off"
      }
    }
  ]
}

module.exports = {
  "extends": ["airbnb"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["prettier", "html"],
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react/prop-types": "off",
    "linebreak-style": "off",
    "no-else-return": "off",
    "react/jsx-one-expression-per-line": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "arrow-parens": "off"
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

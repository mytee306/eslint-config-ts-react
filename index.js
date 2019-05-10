module.exports = {
  "extends": ["airbnb"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prefer-arrow", "prettier", "html"],
  "rules": {
    "@typescript-eslint/no-unused-vars": [2, { "args": "none" }],
    "no-unused-vars": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "@typescript-eslint/prefer-interface": "error",
    "react/prop-types": "off",
    "no-useless-constructor": "off",
    "linebreak-style": "off",
    "no-else-return": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-one-expression-per-line": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "arrow-parens": "off",
    "no-confusing-arrow": "off",
    "import/no-unresolved": "off",
    "import/named": "off",
    "prefer-arrow/prefer-arrow-functions": [
      "warn",
      {
        "disallowPrototype": true,
        "classPropertiesAllowed": false
      }
    ]
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

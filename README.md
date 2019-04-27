# Eslint Config TS React

Eslint configuration for linting a React Typescript app using the popular AirBnB stylguide and Prettier for formatting

## Getting Started

```sh
npm install --save-dev eslint-config-ts-react
```

### eslintrc.json

```json
{
  "extends": ["ts-react"]
}
```

### Peer Dependencies

```sh
npm install --save-dev eslint eslint-config-airbnb eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-jest @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier prettier
```

_Note that peer dependencies ought to be installed manually as per NPM_

### Create React App Setup

_.env_

```text
PREFLIGHT_CHECK=SKIP
```

*_Optionally remove the following from your `package.json`_
```diff
-  "esintConfig": {
-    "extends": "react-app"
-  }
```

### VSCode Integration

#### Extensions

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

#### Settings

##### Locally 

**.vscode/settings.json**
```diff
  "eslint.validate": [
    "javascript",
    "javascriptreact",
+   "typescript",
+   "typescriptreact"
  ],
```

##### Globally 

settings.json ( `ctrl+,` )
```diff
  "eslint.validate": [
    "javascript",
    "javascriptreact",
+   "typescript",
+   "typescriptreact"
  ],
```

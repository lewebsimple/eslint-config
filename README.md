# @lewebsimple/eslint-config

[![npm](https://img.shields.io/npm/v/@lewebsimple/eslint-config)](https://npmjs.com/package/@lewebsimple/eslint-config)

## Usage

### Install

```bash
yarn add -D eslint @lewebsimple/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": [
    "@lewebsimple"
  ]
}
```

### Config `.eslintignore`

```txt
dist
public
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint \"**/*.{vue,ts,js}\""
  }
}
```

### Config VSCode auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

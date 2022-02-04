module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // Import
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    // Prettier
    "prettier/prettier": ["error", {
      printWidth: 120,
      semi: true,
      tabWidth: 2,
      trailingComma: "all"
    }],
  },
}

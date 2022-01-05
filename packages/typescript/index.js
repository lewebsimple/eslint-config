// eslint-disable-next-line @typescript-eslint/no-var-requires
const basic = require('@lewebsimple/eslint-config-basic')

module.exports = {
  extends: [
    '@lewebsimple/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // TypeScript
    "no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
}

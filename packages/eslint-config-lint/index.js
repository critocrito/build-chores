module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:promise/recommended",
    "plugin:flowtype/recommended",
    "plugin:prettier/recommended",
    "prettier/flowtype",
  ],
  plugins: ["import", "promise", "flowtype", "flowtype-errors", "prettier"],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    "no-underscore-dangle": "off",
    "arrow-parens": "off",
    "object-curly-spacing": "off",
    "no-console": "warn",
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/test/**/*.js", "lint-staged.config.js"],
      },
    ],
    "flowtype-errors/show-errors": 2,
    "flowtype-errors/show-warnings": 1,
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        bracketSpacing: false,
        arrowParens: "always",
      },
    ],
  },
};

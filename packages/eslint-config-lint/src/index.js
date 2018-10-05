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
    "prettier",
    "prettier/flowtype",
    "prettier/standard",
    "plugin:promise/recommended",
    "plugin:flowtype/recommended",
  ],
  plugins: ["import", "promise", "prettier", "flowtype", "flowtype-errors"],
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
        devDependencies: ["bin/**/*.js", "test/**/*.js", "test-setup.js"],
      },
    ],
    "flowtype-errors/show-errors": 2,
    "flowtype-errors/show-warnings": 1,
  },
};

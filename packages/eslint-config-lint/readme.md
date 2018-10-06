# `@build-chores/eslint-config-lint`

> Linting JS projects is complicated.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm version](https://img.shields.io/npm/v/@build-chores/eslint-config-lint.svg?style=flat)](https://www.npmjs.com/package/@build-chores/eslint-config-lint) [![Build Status](https://travis-ci.org/critocrito/build-chores.svg?branch=master)](https://travis-ci.org/critocrito/build-chores)

Lint your JavaScript code. This config is based on [Airbnb's base lint configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and includes support for [Prettier](https://prettier.io/), the [Flow type checker](https://flow.org/) and promises.

## Usage

Install the `@build-chores/eslint-config-lint` package into your project:

```
yarn install --dev @build-chores/eslint-config-lint
```

Create a `.eslintrc` file containing the following snippet. See [`eslintrc.example`](../../eslintrc.example) for a template.

```
{
  "extends": ["@build-chores/lint"]
}
```

 To use flow as well place a `.flowconfig` and `.flowcoverage` configuration file. See [`flowconfig.example`](../../flowconfig.example) and [`flowcoverage.example`](../../flowcoverage.example) for templates.

Edit your `package.json` to include the following scripts:

```
{
  "scripts": {
    "lint": "eslint src/**/*.js**",
    "fix": "yarn lint --fix",
    "flow-coverage": "yarn flow-coverage-report --config ./.flowcoverage"
  }
}
```

Types are checked during the regular linting. If you want to run Flow separated, you can call the `flow` command directly with `yarn flow`.

See the [rules file](index.js) for details of the ESLint configuration.

You are ready to lint your JavaScript code.

## Contribute

Check out our [contributing.md](../../CONTRIBUTING.md) to get started.

## License

[<img src="https://www.gnu.org/graphics/gplv3-88x31.png" align="left" />](license)

# Build Chores

> Building JS projects is complicated.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Build Status](https://travis-ci.org/critocrito/build-chores.svg?branch=master)](https://travis-ci.org/critocrito/build-chores) [![Greenkeeper badge](https://badges.greenkeeper.io/critocrito/build-chores.svg)](https://greenkeeper.io/)

The `@build-chores` packages collect common JavaScript tooling configurations and reduces the friction setting up a new JavaScript project. The tooling contains the following parts:

- Code transpilation using [Babel](https://babeljs.io).
- Code linting using [ESLint](https://eslint.org).
- Type checking with [Flow](https://flow.org/).
- Lint stage files using [lint-staged](https://github.com/okonet/lint-staged).
- Commit messafe linting using [Commitlint](https://marionebl.github.io/commitlint/#/).
- Test code using [AVA](https://github.com/avajs/ava).
- Instrument your code using [IstanbulJS](https://istanbul.js.org/).

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [`@build-chores/babel-preset`](packages/babel-preset) | [![npm version](https://img.shields.io/npm/v/@build-chores/babel-preset.svg?style=flat)](https://www.npmjs.com/package/@build-chores/babel-preset) | A default [Babel](https://babeljs.io) configuration, targeting Node 8. It provides support for Flow type declarations and class fields and properties. |
| [`@build-chores/eslint-config-lint`](packages/eslint-config-lint) | [![npm version](https://img.shields.io/npm/v/@build-chores/eslint-config-lint.svg?style=flat)](https://www.npmjs.com/package/@build-chores/eslint-config-lint) | A curated configuration for [ESLint](https://eslint.org) with support for Flow, Prettier and promises. |
| [`@build-chores/staged`](packages/staged) | [![npm version](https://img.shields.io/npm/v/@build-chores/staged.svg?style=flat)](https://www.npmjs.com/package/@build-chores/staged) | Lint staged JS, JSON and *.rc files using [lint-staged](https://github.com/okonet/lint-staged). |
| [`@build-chores/commitlint`](packages/commitlint) | [![npm version](https://img.shields.io/npm/v/@build-chores/commitlint.svg?style=flat)](https://www.npmjs.com/package/@build-chores/commitlint) | Enforce rules for your commit messages. |
| [`@build-chores/test`](packages/test) | [![npm version](https://img.shields.io/npm/v/@build-chores/test.svg?style=flat)](https://www.npmjs.com/package/@build-chores/test) | Configure your [AVA](https://github.com/avajs/ava) test runner to play nice with your custom Babel configuration and provide test coverage reports. |

## Installation

Install the `@build-chores` packages as required:

```
yarn add --dev @build-chores/babel-preset \
               @build-chores/eslint-config-lint \
               @build-chores/staged \
               @build-chores/commitlint \
               @build-chores/test
```

See the [respective packages](packages) for details on how to configure them. The [`project-example`](project-example) collects all relevant configuration changes for a quick overview.

## Contribute

See the [contribution guide](contributing.md) and join the [contributors](https://github.com/critocrito/build-chores/graphs/contributors)!

## License

[<img src="https://www.gnu.org/graphics/gplv3-88x31.png" align="left" />](license)

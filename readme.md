# Build Chores

> Building JS projects is complicated.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

The `@build-chores` packages collect common JavaScript tooling configurations for all of my packages. The tooling contains the following parts:

- Code transpilation using [Babel](https://babeljs.io).
- Code linting using [ESLint](https://eslint.org).
- Lint stage files using [lint-staged](https://github.com/okonet/lint-staged)
- Commit messafe linting using [Commitlint](https://marionebl.github.io/commitlint/#/).

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [`@build-chores/babel-preset`](packages/babel-preset) | [![npm version](https://img.shields.io/npm/v/@build-chores/babel-preset.svg?style=flat)](https://www.npmjs.com/package/@build-chores/babel-preset) | A default [Babel](https://babeljs.io) configuration, targeting Node 8. It provides support for Flow type declarations and class fields and properties. |
| [`@build-chores/eslint-config-lint`](packages/eslint-config-lint) | [![npm version](https://img.shields.io/npm/v/@build-chores/eslint-config-lint.svg?style=flat)](https://www.npmjs.com/package/@build-chores/eslint-config-lint) | A curated configuration for [ESLint](https://eslint.org) with support for Flow, Prettier and promises. |
| [`@build-chores/staged`](packages/staged) | [![npm version](https://img.shields.io/npm/v/@build-chores/staged.svg?style=flat)](https://www.npmjs.com/package/@build-chores/staged) | Lint staged JS, JSON and *.rc files using [lint-staged](https://github.com/okonet/lint-staged). |
| [`@build-chores/commitlint`](packages/commitlint) | [![npm version](https://img.shields.io/npm/v/@build-chores/commitlint.svg?style=flat)](https://www.npmjs.com/package/@build-chores/commitlint) | Enforce rules for your commit messages. |

## Contribute

See the [contribution guide](contributing.md) and join the [contributors](https://github.com/critocrito/build-chores/graphs/contributors)!

## License

[<img src="https://www.gnu.org/graphics/gplv3-88x31.png" align="left" />](license)

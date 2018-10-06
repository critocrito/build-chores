# `@build-chores/babel-preset`

> Transpiling JS projects is complicated.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm version](https://img.shields.io/npm/v/@build-chores/babel-preset.svg?style=flat)](https://www.npmjs.com/package/@build-chores/babel-preset) [![Build Status](https://travis-ci.org/critocrito/build-chores.svg?branch=master)](https://travis-ci.org/critocrito/build-chores)

Transpile Javascript to be compatible with Node 8.

## Usage

Install the `@build-chores/babel-preset` package into your project:

```
yarn install --dev @build-chores/babel-preset
```

Create a `.babelrc` file containing the following snippet:

```
{
  "presets": [["@build-chores/babel-preset"]]
}
```

See [`babelrc.example`](../../babelrc.example) for a template.

Edit your `package.json` to include the following script:

```
{
  "scripts": {
    "compile": "babel -d dist src"
  }
}
```

You are ready to transpile your JavaScript code.

## Contribute

Check out our [contributing.md](../../CONTRIBUTING.md) to get started.

## License

[<img src="https://www.gnu.org/graphics/gplv3-88x31.png" align="left" />](license)

# `@build-chores/test`

> Testing JS projects is complicated.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm version](https://img.shields.io/npm/v/@build-chores/test.svg?style=flat)](https://www.npmjs.com/package/@build-chores/test) [![Build Status](https://travis-ci.org/critocrito/build-chores.svg?branch=master)](https://travis-ci.org/critocrito/build-chores)

Use your custom Babel configuration with the [AVA](https://github.com/avajs/ava) test runner and instrument code coverage using [nyc](https://github.com/istanbuljs/nyc#readme).

## Usage

Install the `@build-chores/test` package into your project:

```
yarn install --dev @build-chores/test ava@1.0.0-beta.8
```

To make use of AVA add the following entry to your `package.json`. It will use your local `.babelrc` to compile your source code and use [`babel-plugin-istanbul`](https://github.com/istanbuljs/babel-plugin-istanbul#readme) to instrument the code. See the [example `package.json`](../../project-example/package.json) for a template.

```
{
  "ava": {
    "require": "@build-chores/test"
  }
}
```

`ava` is declared as a peer dependency. This means it has to be installed along the `@build-chores/test` package. Make sure to install either `ava@1.0.0-beta.8` or `ava@next` tag. The default `ava` package installs a very old version.

Configure code coverage by placing a `.nycrc` in your project root. See the [example `.nycrc`](../../project-example/.nycrc) for a template.

```
{
  "sourceMap": false,
  "instrument": true,
  "all": true,
  "include": [
    "src/**/*.js"
  ]
}
```

Please note that in order for `all` to work and instrument all source files, `instrument` has to be set to `true`.

Provide the `test` and `coverage` script targets to your `package.json`. AVA sets your `NODE_ENV` to `test` automatically. See the [example `package.json`](../../project-example/package.json) for a template.

```
{
  "scripts": {
    "test": "ava",
    "test:coverage": "nyc yarn test",
    "test:watch": "yarn test -w"
  }
}
```

You are ready to test your files.

## Contribute

Check out our [contributing.md](../../CONTRIBUTING.md) to get started.

## License

[<img src="https://www.gnu.org/graphics/gplv3-88x31.png" align="left" />](license)

# `@build-chores/commitlint`

> Committing JS projects is complicated.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm version](https://img.shields.io/npm/v/@build-chores/commitlint.svg?style=flat)](https://www.npmjs.com/package/@build-chores/commitlint) [![Build Status](https://travis-ci.org/critocrito/build-chores.svg?branch=master)](https://travis-ci.org/critocrito/build-chores)

Lint the commit messages of your JS project.

## Usage

Install the `@build-chores/commitlint` package into your project:

```
yarn install --dev @build-chores/commitlint
```

Create a `commitlint.config.js` file containing the following snippet. See [`commitlint.config.js.example`](../../commitlint.config.js.example) for a template.

```
module.exports = {
  extends: ['@build-chores/commitlint']
}
```

Use [Husky](https://github.com/typicode/husky#readme) to lint your commit message whenever you commit.

```
yarn add --dev husky
```

Place a `commit-msg` hook in your `.huskyrc`. The following example hook only lints commit message when committing to the `master` branch. See [`huskyrc.example`](../../huskyrc.example) for a template.

```
{
  "hooks": {
    "commit-msg": "! git rev-parse --abbrev-ref HEAD | grep -q master || commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

You are ready to lint your commit messages.

## Contribute

Check out our [contributing.md](../../CONTRIBUTING.md) to get started.

## License

[<img src="https://www.gnu.org/graphics/gplv3-88x31.png" align="left" />](license)

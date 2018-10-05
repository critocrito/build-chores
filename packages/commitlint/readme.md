# `@build-chores/commitlint`

> Committing JS projects is complicated.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm version](https://img.shields.io/npm/v/@build-chores/commitlint.svg?style=flat)](https://www.npmjs.com/package/@build-chores/commitlint)

Lint the commit messages of your JS project.

## Usage

Install the `@build-chores/commitlint` package into your project:

```
yarn install --dev @build-chores/commitlint
```

Create a `commitlint.config.js` file containing the following snippet:

```
module.exports = {
  extends: ['@build-chores/commitlint']
}
```

Add the following pre-commit hook to your `.huskyrc` configuration:

```
{
  "hooks": {
    "commit-msg": "! git rev-parse --abbrev-ref HEAD | grep -q master || commitlint -E HUSKY_GIT_PARAMS",
  }
}
```

You are ready to lint your commit messages.

## Contribute

Check out our [contributing.md](../../CONTRIBUTING.md) to get started.

## License

[<img src="https://www.gnu.org/graphics/gplv3-88x31.png" align="left" />](license)

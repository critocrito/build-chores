# `@build-chores/staged`

> Staging JS projects is complicated.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm version](https://img.shields.io/npm/v/@build-chores/staged.svg?style=flat)](https://www.npmjs.com/package/@build-chores/staged)

Stage files of your JS project before committing them with git.

## Usage

Install the `@build-chores/staged` package into your project:

```
yarn install --dev @build-chores/staged
```

Add the following pre-commit hook to your `.huskyrc` configuration:

```
{
  "hooks": {
    "pre-commit": "! git rev-parse --abbrev-ref HEAD | grep -q master || (lint-staged -c @build-chores/staged && yarn test)"
  }
}
```

You are ready to lint your staged files before committing.

## Contribute

Check out our [contributing.md](../../CONTRIBUTING.md) to get started.

## License

[<img src="https://www.gnu.org/graphics/gplv3-88x31.png" align="left" />](license)

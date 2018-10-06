# `@build-chores/staged`

> Staging JS projects is complicated.

## Synopsis

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm version](https://img.shields.io/npm/v/@build-chores/staged.svg?style=flat)](https://www.npmjs.com/package/@build-chores/staged) [![Build Status](https://travis-ci.org/critocrito/build-chores.svg?branch=master)](https://travis-ci.org/critocrito/build-chores)

Stage files of your JS project before committing them with git.

## Usage

Install the `@build-chores/staged` package into your project:

```
yarn install --dev @build-chores/staged
```

Use [Husky](https://github.com/typicode/husky#readme) to lint your stage whenever you commit.

```
yarn add --dev husky
```

Place a `pre-commit` hook in your `.huskyrc`. The following example hook only lints your stage when committing to the `master` branch. See the [example `.huskyrc`](../../project-example/.huskyrc) for a template.

```
{
  "hooks": {
    "pre-commit": "! git rev-parse --abbrev-ref HEAD | grep -q master || lint-staged -c @build-chores/staged"
  }
}
```

To make sure that `prettier` isn't touching the `package.json` file during staging, place a `.prettierignore` file. See the [example `.prettierignore`](../../project-example/.prettierignore) for a template.

```
package.json
```

You are ready to lint your staged files before committing.

## Contribute

Check out our [contributing.md](../../CONTRIBUTING.md) to get started.

## License

[<img src="https://www.gnu.org/graphics/gplv3-88x31.png" align="left" />](license)

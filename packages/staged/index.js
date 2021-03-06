module.exports = {
  "*.js": ["eslint --fix", "git add"],
  "**/package.json": ["prettier-package-json --write", "git add"],
  "*.json": ["prettier --write", "git add"],
  ".*rc": ["prettier --parser json --write", "git add"],
};

#!/usr/bin/env node
/* eslint no-console: off */
const path = require("path");
const {spawn} = require('child_process');
const version = require("./package.json").dependencies["flow-bin"].replace("^", "");

(async () => {
  await new Promise((resolve, reject) => {
    const child = spawn(
      path.resolve(process.cwd(), "node_modules/.bin/flow-typed"),
      ["-f", version].concat(process.argv.slice(2)),
    );
    child.stdout.on("data", (chunk) => {
      console.log(chunk.toString());
    });
    child.stderr.on("data", (chunk) => {
      console.log(chunk.toString());
    });
    child.on("error", (err) => reject(err));
    child.on("close", () => resolve());
  });
})();

const {declare} = require("@babel/helper-plugin-utils");
const presetEnv = require("@babel/preset-env");
const presetFlow = require("@babel/preset-flow");
const flowStripTypes = require("@babel/plugin-transform-flow-strip-types");
const flowSyntax = require("@babel/plugin-syntax-flow");
const proposalClassProperties = require("@babel/plugin-proposal-class-properties");

module.exports = declare((api) => {
  api.assertVersion(7);

  return {
    presets: [[presetEnv, {targets: {node: "8"}}], presetFlow],
    plugins: [
      flowSyntax,
      flowStripTypes,
      [proposalClassProperties, {loose: true}],
    ],
  };
});

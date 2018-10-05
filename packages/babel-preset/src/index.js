import {declare} from "@babel/helper-plugin-utils";
import presetEnv from "@babel/preset-env";
import presetFlow from "@babel/preset-flow";
import flowStripTypes from "@babel/plugin-transform-flow-strip-types";
import flowSyntax from "@babel/plugin-syntax-flow";
import proposalClassProperties from "@babel/plugin-proposal-class-properties";

export default declare((api) => {
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

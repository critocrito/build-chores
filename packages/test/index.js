const istanbul = require("babel-plugin-istanbul");

require("@babel/register")({
  "env": {
    "test": {
      "plugins": [
        [istanbul.default],
      ],
    },
  },
});

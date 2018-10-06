require("@babel/register")({
  env: {
    test: {
      plugins: [
        ["babel-plugin-istanbul"],
      ],
    },
  },
});

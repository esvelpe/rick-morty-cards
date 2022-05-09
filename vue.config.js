const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [{ family: "Macondo" }],
      }),
    ],
  },
};

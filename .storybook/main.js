module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/builder-webpack5"],
  staticDirs: ["../public", '../static'],
  core: {
    builder: "webpack5"
  }
};
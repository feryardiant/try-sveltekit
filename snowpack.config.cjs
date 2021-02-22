// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  plugins: [
    [
      '@snowpack/plugin-postcss'
    ],
  ],
  extends: '@sveltejs/snowpack-config',
  mount: {
    './src/components': '/_components'
  },
  alias: {
    $components: './src/components'
  }
};

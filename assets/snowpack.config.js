// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "js": { url: "/js" },
    "css": { url: "/css" },
    "static": { url: "/", static: true, resolve: false }
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: "../priv/static/"
  },
  optimize: {
    entrypoints: ["./static/index.html"],
    bundle: true,
    minify: true,
    treeshake: true,
    target: 'es2018'
  },
};

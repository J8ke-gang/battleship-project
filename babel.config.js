// babel.config.js
export default {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }]
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ]
};

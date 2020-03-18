import plugin_gridsome_plugin_tailwindcss_5 from "C:\\webdev\\2020-luisa-portfolio\\node_modules\\gridsome-plugin-tailwindcss\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"./tailwind.config.js","purgeConfig":{"keyframes":true,"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"],"whitelistPatterns":[{},{},{},{},{},{},{},{},{},{}]},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}},"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"shouldPurgeUnusedKeyframes":true,"importUrlConfig":{"modernBrowser":true}}
  }
]

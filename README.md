# snowpack-plugin-raw-loader
This tiny [Snowpack](https://www.snowpack.dev/) plugin will stringify wanted files so they can be loaded as modules.


#### snowpack.config.js
```js
module.exports = {
  plugins: [
    ["snowpack-plugin-raw-loader", {
      exts: [".txt"], // Add file extensions saying what files should be loaded as strings in your snowpack application. Default: '.txt'
    }],
  ],
}
```

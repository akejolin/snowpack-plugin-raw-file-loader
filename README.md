# snowpack-plugin-raw-file-loader
This tiny [Snowpack](https://www.snowpack.dev/) plugin will stringify wanted files so they can be loaded as modules. For example `.md`, `.svg` etc.


#### snowpack.config.js
```js
module.exports = {
  plugins: [
    ["snowpack-plugin-raw-file-loader", {
      exts: [".txt", ".md", ".svg", ...], // Add file extensions saying what files should be loaded as strings in your snowpack application. Default: '.txt'
    }],
  ],
}
```

#### Usage
```js

import someMarkdown from './some-path/some-markdown'

...

```

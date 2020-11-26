const pkt = require('./package.json')
const fs = require('fs')

const defaultFileExt= ['.txt']

function formatOptions(options) {
  const { exts = defaultFileExt } = options || {}
  return {
    exts: Array.isArray(exts) && exts.length > 0 ? exts : defaultFileExt,
  };
}

module.exports = function (snowpackConfig, pluginOptions) {
  const { exts } = formatOptions(pluginOptions)
  return {
    name: pkt.name,
    resolve: {input: exts, output: [".js"]},
    async load({filePath  }) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const json = JSON.stringify(fileContent)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029')
      return `export default ${json}`
    },
  }
}
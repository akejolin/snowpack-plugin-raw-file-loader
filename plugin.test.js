const path = require('path')
const fs = require('fs')

const snowpackPluginRawFileLoader = require('./plugin')

let result = null
let result2 = null


describe('snowpack-plugin-raw-file-loader', () => {
  beforeAll(async () => {
    const filePath = path.join(process.cwd(), '__mock__/test.txt')
    const plugin = snowpackPluginRawFileLoader({}, {})
    result = await plugin.load({ filePath })
  })
  it('should convert file to a module that outputs a string', () => {
    expect(typeof result).toEqual("string")
  })
})

describe('snowpack-plugin-raw-file-loader', () => {
  beforeAll(async () => {
    const filePath2 = path.join(process.cwd(), '__mock__/test.md')
    const plugin2 = snowpackPluginRawFileLoader({}, {exts: [".txt", ".md"]})
    result2 = plugin2.load({filePath: filePath2})
  })
  it('should affect extended file types', () => {
    expect(typeof result).toEqual("string")
  })
})



const
  jsMain = 'assets/js/main.js',
  rollup = require('rollup'),
  terser = require('rollup-plugin-terser').terser,
  inputOpts = {
    input: `./src/_${jsMain}`,
  },
  outputOpts = {
    format: 'es',
    sourcemap: dev,
    plugins: [
      terser({
        mangle: {
          toplevel: true,
        },
        compress: {
          drop_console: !dev,
          drop_debugger: !dev,
        },
        output: {
          quote_style: 1,
        },
      })
    ]
  }

module.exports = class {
  data() {
    return {
      permalink: jsMain,
      eleventyExcludeFromCollections: true,
    }
  }

  async render() {
    const
      bundle = await rollup.rollup(inputOpts),
      { output } = await bundle.generate(outputOpts),
      out = output.length && output[0]

    let code = ''
    if (out) {
      code = out.code

      if (out.map) {
        let b64 = new Buffer.from(out.map.toString())
        code += `//# sourceMappingURL=data:application/json;base64,${b64.toString('base64')}`
      }
    }

    return code
  }
}

const
  dest     = './_site/assets/images',
  fsp      = require('fs').promises,
  imagemin = require('imagemin')
  plugins  = [
    require('imagemin-mozjpeg')(),
    require('imagemin-pngquant')({ strip: true }),
    require('imagemin-svgo')(),
  ]

module.exports = class {
  data() {
    return {
      permalink: false,
      eleventyExcludeFromCollections: true,
    }
  }

  async render() {
    try {
      let dir = await fsp.stat(dest)
      if (dir.isDirectory()) {
        return true
      }
    } catch(e) {
        //
    }

    await imagemin(['src/_assets/images/*', '!src/_assets/images/*.js'], {
      destination: dest,
      plugins,
    })

    return true
  }
}

const { Asset } = require('parcel-bundler');
// const Debug = require('debug');

// const debug = Debug("parcel-plugin-glsl:GLslAsset");

class GLslAsset extends Asset {

  generate() {
    return {
      js: "module.exports = " + JSON.stringify(this.contents)
    }
  }
}

GLslAsset.type = 'js'

module.exports = GLslAsset;
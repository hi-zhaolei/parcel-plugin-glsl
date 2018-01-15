const { Asset } = require('parcel-bundler');
const Debug = require('debug');

const debug = Debug("parcel-plugin-glsl:GLslAsset");

class GLslAsset extends Asset {
  // type = 'js'; // 设置主要输出类型

  parse(code) {
    debug('parse');
    // 将代码解析为AST树
    // console.log(code);
    this.outputCode = "module.exports = " + JSON.stringify(code);
    return this.outputCode;
  }

  generate() {
    debug('generate');

    // 生成做对。如有需要，可返回多个转换(renditions)。
    // 结果会传到合适的 packagers 去生成最终的文件束
    // console.log(this.ast);
    return {
      js: this.outputCode
    }
  }
}

// GLslAsset.type = "glsl"

module.exports = GLslAsset;
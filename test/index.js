const Bundler = require('parcel-bundler');
const PluginGlsl = require('../index');

let bundler = new Bundler('./example/index.html', {
  watch: true
});

PluginGlsl(bundler);

bundler.serve();
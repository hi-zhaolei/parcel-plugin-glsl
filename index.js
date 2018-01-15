module.exports = function (bundler) {
    bundler.addAssetType('glsl', require.resolve('./src/GlslAsset.js'));
    // bundler.addPackager('js', require.resolve('../parcel-bundler/src/packagers/JSPackager.js'));
};

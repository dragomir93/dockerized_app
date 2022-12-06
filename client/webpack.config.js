const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('../api/public/build')
  .setPublicPath('/build')
  .setManifestKeyPrefix('build/')
  .addEntry('js/app', './src/index.js')
  .addStyleEntry('css/app', './assets/index.css')
  .enableSingleRuntimeChunk()
  .splitEntryChunks()
  .enableBuildNotifications(true, (options) => {
    options.alwaysNotify = true;
    options.title = 'DONE';
  })
  .configureBabel((babelConfig) => {
    babelConfig.plugins.push('@babel/plugin-transform-async-to-generator');
    babelConfig.plugins.push('@babel/plugin-transform-runtime');
  }, {
    useBuiltIns: 'usage', // or try "entry"
    corejs: 3,
  })
  .addLoader({
    test: /\.(woff(2)?)(\?[a-z0-9]+)?$/,
    use: [{
      loader: 'file-loader', options: { esModule: false },
    }],
  })
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableReactPreset()
  .copyFiles({
    from: './assets/fonts',
  })

module.exports = Encore.getWebpackConfig();
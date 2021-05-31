// const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

// module.exports = (angularWebpackConfig, options) => {
//   const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)
//   const singleSpaConfig = {
//     output: {
//       library: `${name}-[name]`,
//       libraryTarget: 'umd',
//     },
//     externals: {
//       'zone.js': 'Zone',
//     },
//   };
//   const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
//   // Feel free to modify this webpack config however you'd like to
//   return mergedConfig
// }

const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default
const webpackMerge = require('webpack-merge');
module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)
  const singleSpaConfig = {
    devServer: {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    };
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
  // Feel free to modify this webpack config however you'd like to
  return mergedConfig
}
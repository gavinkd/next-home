const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer()


// const withLess = require('@zeit/next-less')
//
// module.exports = withLess({
//     cssModules: true,
//     lessLoaderOptions: {
//         javascriptEnabled: true,
//         cssModules: true,
//     }
// })

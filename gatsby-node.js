exports.createSchemaCustomization = require('./src/gatsby/node/createSchemaCustomization')
exports.createPages = require('./src/gatsby/node/createPages')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
      child_process: "empty",
    },
  })
}
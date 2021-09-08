exports.createSchemaCustomization = require('./src/gatsby/node/createSchemaCustomization')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
      child_process: "empty",
    },
  })
}
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)

  return graphql(
    `
      query {
        allMdx {
          nodes {
            id
            body
            slug
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMdx.nodes.forEach((node) => {
      createPage({
        path: `/posts/${node.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}

import * as React from 'react'
import Layout from '../components/Layout'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Posts = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          slug
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="container">
        {nodes.map(({ frontmatter: { title }, slug }) => (
          <Link className="block" to={`/posts/${slug}`} key={title}>
            {title}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Posts

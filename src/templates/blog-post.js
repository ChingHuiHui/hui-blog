import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'

function BlogPost({
  data: {
    mdx: {
      frontmatter: { title },
      body,
    },
  },
}) {
  return (
    <Layout>
      <article className="container">
        <section className="border-b py-3 mb-5">
          <h2 className="text-3xl lg:text-5xl">{title}</h2>
        </section>
        <section>
          <MDXRenderer>{body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      id
      body
    }
  }
`
export default BlogPost

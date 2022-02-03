import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
    return(
        <Layout pageTitle="Blog">
                {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                    <Link to={`/blog/${node.slug}`}>
                      <h2>{node.frontmatter.title}</h2>
                      </Link>
                    <p>Posted: {node.frontmatter.date}</p>
                  </article>
                ))
                }
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date}) {
    nodes {
      id
      slug
      frontmatter {
        date(formatString: "D MM, YYYY")
        title
      }
      body
    }
  }
}
`
export default BlogPage
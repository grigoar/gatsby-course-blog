import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlockPage = ({ data }) => (
  <Layout>
    <Seo title="Blog Page" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => {
      return (
        <div key={post.node.div}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br></br>
          <br></br>
          <Link to={post.node.frontmatter.path}>Read more</Link>
          <br></br>
          <br></br>
          <hr></hr>
        </div>
      )
    })}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlockPage

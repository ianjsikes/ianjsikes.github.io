import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import PostPreview from '../components/post-preview'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 800px;
`

const PageTitle = styled.h2`
  color: black;
  font-family: 'Fira Code';
  text-decoration: underline;
`

class Blog extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges
    console.log(this.props.data)

    return (
      <Container>
        <Link to="/">
          <PageTitle>{siteTitle}</PageTitle>
        </Link>
        {posts.map(({ node }) => (
          <PostPreview post={node} />
        ))}
      </Container>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        links {
          title
          link
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

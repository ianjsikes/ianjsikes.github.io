import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { media } from '../utils/responsive'
import PostPreview from '../components/post-preview'
import SEO from '../components/seo'
import { BoxStyle, Button } from '../components'

const Centered = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 12.5%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${media.tablet`
    flex-direction: column;
  `}

  transition: width 1s;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  padding: 1rem;

  ${BoxStyle(5)}

  ${media.tablet`
    margin-right: 0;
    margin-bottom: 2rem;
  `}
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  a {
    text-decoration: underline;
    font-family: 'Fira Mono';
    color: black;
  }
`

const LinkGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 1rem;
  place-items: center;
  justify-content: stretch;
  align-self: stretch;
`

const SocialLink = styled.a`
  font-family: 'Fira Code';
  color: black;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    const links = data.site.siteMetadata.links
    console.log(BoxStyle(5))

    return (
      <Centered>
        <SEO title="Home" />
        <Wrapper>
          <div>
            <Header>
              <Title>
                <Link to="/">Ian J Sikes</Link>
              </Title>

              <p
                style={{ textAlign: 'center', fontFamily: 'Fira Code' }}
                label="web, mobile, and game developer"
              >
                web / mobile / game
                <br />
                developer
              </p>
              <LinkGrid>
                {links.map(({ title, link }) => (
                  <SocialLink key={title} href={link}>
                    {title}
                  </SocialLink>
                ))}
              </LinkGrid>
            </Header>
          </div>
          <Main>
            {posts.slice(0, 3).map(({ node }) => (
              <PostPreview post={node} key={node.fields.slug} />
            ))}

            <Link to="/blog" tabindex="-1">
              <Button>View All</Button>
            </Link>
          </Main>
        </Wrapper>
      </Centered>
    )
  }
}

export default BlogIndex

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

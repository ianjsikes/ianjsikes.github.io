import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Box } from './index.js'

const PostContainer = styled(Box)`
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`
const PostTitle = styled.h3`
  color: black;

  a {
    color: black;
  }
`

const PostPreview = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const description = post.frontmatter.description || post.excerpt

  return (
    <PostContainer>
      <PostTitle>
        <Link to={post.fields.slug}>{`> ${title}`} </Link>
      </PostTitle>

      <p dangerouslySetInnerHTML={{ __html: description }} />
    </PostContainer>
  )
}

export default PostPreview

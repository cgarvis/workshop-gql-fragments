import React from 'react'
import gql from 'graphql-tag'

import Author from './author'

const ShortPost = ({ post }) => (
  <div>
    <h3>{ post.title }</h3>
    <p>{ truncate(post.body) }</p>
    <Author author={post.author} />
  </div>
)

const truncate = (str = '', length = 100) => {
  if (str.length > length) {
    return str.substring(0, length - 3) + '...'
  }

  return str
}

ShortPost.fragments = {
  Post: gql`
    fragment ShortPost on Post {
      title
      body

      author {
        id
        ...Author
      }
    }

    ${Author.fragments.Author}
  `
}

export default ShortPost

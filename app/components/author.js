import React from 'react'
import gql from 'graphql-tag'

const Author = ({ author }) => (
  <p>written by { `${author.firstName} ${author.lastName}` } joined {author.joinedAt}</p>
)

Author.fragments = {
  Author: gql`
    fragment Author on User {
      firstName
      lastName
      joinedAt
    }
  `
}

export default Author

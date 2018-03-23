import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { Header } from 'semantic-ui-react'
import withData from '../lib/withData'

import ShortPost from './short-post'

const map = (arr, fn) => arr ? arr.map(fn) : []

const RecentPosts = ({ data: { loading, posts = {} } }) => (
  <div>
    <Header as="h2">Recent Posts</Header>

    <div>
      { map(posts.items, p => <ShortPost key={p.id} post={p} />) }
    </div>
  </div>
)

const recentPostsQuery = gql`
  query {
    posts {
      items {
        id
        ...ShortPost
      }
    }
  }

  ${ShortPost.fragments.Post}
`

const enhance = compose(
  withData,
  graphql(recentPostsQuery)
)

export default enhance(RecentPosts)

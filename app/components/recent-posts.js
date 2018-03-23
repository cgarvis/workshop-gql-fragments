import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { Header } from 'semantic-ui-react'
import withData from '../lib/withData'

const map = (arr, fn) => arr ? arr.map(fn) : []

const RecentPosts = ({ data: { loading, posts = {} } }) => (
  <div>
    <Header as="h2">Recent Posts</Header>

    <ul>
      { map(posts.items, p => <li>{ p.title }</li>) }
    </ul>
  </div>
)

const recentPostsQuery = gql`
  query {
    posts {
      items {
        id
        title
      }
    }
  }
`

const enhance = compose(
  withData,
  graphql(recentPostsQuery)
)

export default enhance(RecentPosts)

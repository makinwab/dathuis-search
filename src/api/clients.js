const GET_CLIENTS = (`
  query($name: String, $origin: String, $cursor: ID, $endCursor: ID) {
    clients(name: $name, origin: $origin, cursor: $cursor, endCursor: $endCursor) {
      edges {
        id
        first_name
        last_name
        email
        gender
        photo
        origin
      }
      pageInfo {
        cursor
        endCursor
        limit
        size
        totalCount
        hasNextPage
      }
    }
  }
`)

export default GET_CLIENTS;
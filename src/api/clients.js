const GET_CLIENTS = (`
  query($searchTerm: String, $cursor: ID, $endCursor: ID) {
    clients(searchTerm: $searchTerm, cursor: $cursor, endCursor: $endCursor) {
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
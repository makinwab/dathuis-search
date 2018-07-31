const GET_CLIENTS = (`
  query($name: String, $origin: String, $limit: Int, $endCursor: ID) {
    clients(name: $name, origin: $origin, limit: $limit, endCursor: $endCursor) {
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
        endCursor
        limit
        size
      }
    }
  }
`)

export default GET_CLIENTS;
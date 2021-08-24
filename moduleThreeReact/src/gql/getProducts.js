import gql from 'graphql-tag'

const GET_PRODUCTS = gql`
query GetProducts($count: Int = 50, $cursor: String) {
  products(first: $count, after: $cursor) {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        id
        handle
        description
        title
        vendor
        productType
        tags
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        options {
          id
          name
          values
        }
        variants(first: 250) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              title
              selectedOptions {
                name
                value
              }
              image {
                src
              }
              price
            }
          }
        }
        images(first: 250) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              src
            }
          }
        }
      }
    	cursor
    }
  }
}
`

export default GET_PRODUCTS
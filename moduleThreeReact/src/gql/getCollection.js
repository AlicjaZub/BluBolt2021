import gql from 'graphql-tag'

const GET_PRODUCTS_IN_COLLECTION = gql`
query GetProductsInCollection($count: Int = 30, $cursor: String, $handle: String = "all") {
  collectionByHandle(handle: $handle) {
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
}
`

export default GET_PRODUCTS_IN_COLLECTION
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'

import './reset.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
     uri: 'https://blubolt-demo.myshopify.com/api/graphql',
     headers: {
      'X-Shopify-Storefront-Access-Token': 'fab890e8b84c3d353d0a71711462269f'
      },
    fetch,
  }),
  cache: new InMemoryCache().restore({})
})


ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

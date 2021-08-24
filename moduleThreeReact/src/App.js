import React from 'react'
import './App.scss'
import { useQuery } from '@apollo/react-hooks'
import GET_PRODUCTS_IN_COLLECTION from './gql/getCollection'




const App = () =>  {
  
  const {data, loading, error} = useQuery(GET_PRODUCTS_IN_COLLECTION, {
    variables: {
      count: 5,
      handle: 'skateboard'
    }
  })

  // This will return a set of ten skateboards this should be renderted using the product card and grid type structure styling as you go.
  console.log(data)
  // explore the data and render your product list accordingly


  if(loading) {
    // Data is still loading....
    return (<div className="App">Loading....</div>)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        
        <div className="buttonGroup">
          <button>Reverse Product Order</button>
          <button>Price High to Low</button>
          <button>Price Low to High</button>
          <button>Display 9 products</button>
        </div>

        {/* 
          Your render components go here
        */} 

        <div className="ProductList">
          Display your product list here
        </div>
      </main>
    </div>
  )
}

export default App

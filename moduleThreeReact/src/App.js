import React from 'react'
import './App.scss'
import { useQuery } from '@apollo/react-hooks'
import GET_PRODUCTS_IN_COLLECTION from './gql/getCollection'
import ItemContainer from "./components/ItemContainer";
import Button from './components/Button'
import {useEffect, useState} from "react";


const App = () =>  {
  
  const {data, loading, error} = useQuery(GET_PRODUCTS_IN_COLLECTION, {
    variables: {
      count: 5,
      handle: 'skateboard'
    }
  })

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(!loading) {
      setProducts(sortAlaphabetically(data.collectionByHandle.products.edges))
    }
  }, [data])

  function sortHightToLow(data)
  {
    let dataCopy = [...data] // copy data to stop mutating reacts state
    dataCopy.sort((a, b) =>
        a.node.priceRange.maxVariantPrice.amount < b.node.priceRange.maxVariantPrice.amount && 1 || -1)
    return dataCopy
  }

  function sortLowToHigh(data)
  {
    let dataCopy = [...data] // copy data to stop mutating reacts state
    dataCopy.sort((a, b) =>
        a.node.priceRange.maxVariantPrice.amount > b.node.priceRange.maxVariantPrice.amount && 1 || -1)
    return dataCopy
  }

  function sortAlaphabetically(data)
  {
    let dataCopy = [...data] // copy data to stop mutating reacts state
    dataCopy.sort((a, b) =>
        a.node.title > b.node.title && 1 || -1)
    return dataCopy
  }

  function sortAlaphabeticallyReverse(data)
  {
    let dataCopy = [...data] // copy data to stop mutating reacts state
    dataCopy.sort((a, b) =>
        a.node.title < b.node.title && 1 || -1)
    return dataCopy
  }

  function showWithoutLastItem(data)
  {
    let dataCopy = [...data] // copy data to stop mutating reacts state
    dataCopy.pop()
    return dataCopy
  }

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
          <Button title='buy' value='Reverse Product Order' type='button' click = {() => {
            setProducts(sortAlaphabeticallyReverse(data.collectionByHandle.products.edges))
          }} />
          <Button title='buy' value='Price High to Low' type='button' click = {() => {
            setProducts(sortHightToLow(data.collectionByHandle.products.edges))
          }} />
          <Button title='buy' value='Price Low to High' type='button' click = {() => {
            setProducts(sortLowToHigh(data.collectionByHandle.products.edges))
          }} />
          <Button title='buy' value='Display 9 products' type='button' click = {() => {
            setProducts(showWithoutLastItem(data.collectionByHandle.products.edges))
          }} />
        </div>

        {/* 
          Your render components go here
        */}
          <ItemContainer products={products}/>
      </main>
    </div>
  )
}

export default App

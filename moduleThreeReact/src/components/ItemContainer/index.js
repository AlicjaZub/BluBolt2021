import React, { Component }  from 'react';
import Button from "../Button";
import {useEffect, useState} from "react";

const ItemContainer = (props) => {

    return (
        <div class='container'>
        {props.products.map((product, index) => {
                return (
                    <div class="productContainer" key={index}>
                        <img src={product.node.images.edges[0].node.src}/>
                        <h3>{product.node.vendor}</h3>
                        <h1> {product.node.title}</h1>
                        <h2> {product.node.priceRange.maxVariantPrice.amount}</h2>
                        {/*<p> {product.node.description}</p>*/}
                        <div>
                            <Button title='buy-button' value='BUY' type='button' click = {() => {console.log('BUY')}} />
                            <Button title='more-button' value='MORE' type='button' click = {() => {console.log('MORE')}} />
                        </div>
                    </div>
                )}
            )}
        </div>
    )
}

export default ItemContainer;
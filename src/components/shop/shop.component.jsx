


import React, { useContext } from 'react'
import { ProductContext, ProductProvider } from "../../contexts/product.context";

export default function Shop() {
    const {products} = useContext(ProductContext)
  return (
    <>
    {
        products.map(({id,name})=>{
            return(
                <div key={id}>

                
                <h1>{name}</h1>
                </div>
            )
        })
    }
    </>
  )
}

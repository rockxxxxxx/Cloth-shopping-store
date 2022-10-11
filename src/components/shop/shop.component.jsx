import React, { useContext } from 'react'
import { ProductContext } from "../../contexts/product.context";
import ProductCard from '../product-card/product-card.component';
import './shop.styles.scss'


export default function Shop() {
    const {products} = useContext(ProductContext)
  return (
    <div className='products-container'>
    {
        products.map((product)=>{
            return(
                <div key={product.id}>
                    <ProductCard product={product}/>
                </div>
            )
        })
    }
    </div>
  )
}

import React from 'react'; //imr- import react
import Product from './Product.js'

//rfc- react functional component
export default function ProductList(props) {
    // we can write {Product} in place of props, but props takes all in it...so it's best practice.
    //console.log(props);
    return (
        //loops
        // for-loop don't work in jsx, so use map fn, for-each fn only.
        props.productList.length >0 ?
        props.productList.map((product,i)=>{
           return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i}
           decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}/>
           //to show th diff. b/w components
       })
       : <h1 className='text-color-red'>No products Exists in mana cart <br/> Please add</h1>
    )
}   
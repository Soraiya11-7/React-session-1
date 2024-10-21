import React from 'react'
import Product from '../product/Product'

// export default function Products({name})
export default function Products(props) {
    // console.log(props);
    // const {name} = props;
    // console.log(name);
  return (
    <div>
        <h1>I am from products</h1>
        {/* <Product name={name}></Product> */
         <Product data={props.name}></Product>
         
        }
    </div>
  )
}

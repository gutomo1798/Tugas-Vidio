import React, { Component } from 'react';
import Product from './Product';
import Title from './title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../Context';



class productlist extends Component {
    render() {    
        return (
            <React.Fragment>
               <div className="py-5">
                   <div className="container">
                       <Title Name="our" title="product"/>
                       <div className="row">
                           <ProductConsumer>
                               {value => {
                                   return value.products.map(product=> {
                                       return <Product key={product.id} product={product}/>
                                   })
                               }}
                           </ProductConsumer>
                       </div>
                   </div>
               </div>
           </React.Fragment>


            // <div>
            //    <Product/>
            // </div>
        );
    }
}

export default productlist;
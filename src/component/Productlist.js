import React, { Component } from 'react';
import Product from './Product';
import Title from './title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../Context';



class productlist extends Component {
    state={
        Products:storeProducts
    }
    render() {
        console.log(this.state.Products);
        return (
            <React.Fragment>
               <div className="py-5">
                   <div className="container">
                       <Title Name="our"title="product"/>
                       <div className="row">
                           <ProductConsumer>
                               {value => {
                                   return<h1>
                                       {value}
                                   </h1>;
                               }
                               }
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
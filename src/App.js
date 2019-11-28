import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Productlist from './component/Productlist';
import Detail from './component/Detail';
import Cart from './component/Cart';
import Default from './component/Default';


class App extends Component {
render() {
  return(
    <React.Fragment>
      <Navbar/>
      <Switch>
       <Route exact path="/" component={Productlist}/>
       <Route path="/detail" component={Detail}/>
       <Route path="/cart" component={Cart}/>
       <Route path="/" component={Productlist}/>
       <Route component={Default}/>
      </Switch>
     </React.Fragment>
  );
 }
}
export default App;

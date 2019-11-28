import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
// import styled from 'component'

class navbar extends Component {
    render() {
        return (
            <div className="navbar bg-primary navbar-expand-sm navbar-doNotTrack px-sm-5">
             <Link to="/">
               <img src={logo} alt="store" className="navbar-brand"/>
             </Link>
             <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                     <Link to="/" className="nav-link">
                         Products
                     </Link>
                 </li>
             </ul>
             <Link to="/cart" className="ml-auto">
                 <div className="btn-transparent text-white btn">
                   <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                   </span>
                   MY CART
                 </div>
             </Link>
             </div>            
        );
    }
}
export default navbar;

// const NavWrapper = styled.nav`
//      background : var(--mainBlue);
//      .nav-link{
//          color: var(--mainWhite) !import;
//          font-size:1.3rem;
//          text-transform:capitalize;
//      }
//     `;
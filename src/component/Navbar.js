import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import logo from "../logo.svg";
// import styled from 'component'

class navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-doNotTrack px-sm-5">
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
                 <ButtonContainer>
                     <span className="ml-2">
                        <i className="fas fa-cart-plus"/>
                    </span>
                   MY CART
                   </ButtonContainer>
             </Link>
             </NavWrapper>            
        );
    }
}
export default navbar;



 const NavWrapper = styled.nav`
      background : var(--mainBlue);
      .nav-link{
          color: var(--mainWhite) !import;
          font-size:1.3rem;
          text-transform:capitalize;
      }
  `;
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import CartContext from "../../contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../Cart/CartIcon"
import CartDropdown from "../Cart/CartDropdown"
import {showCart, loadCart} from  "../../redux/action/cartActions"

const Header = () => {
  const context = useContext(AuthContext);
  const totalProducts = useSelector((state) => state.cartReducer.totalProducts);
  const isShownCart = useSelector((state) => state.cartReducer.showCartDropdown);
  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCart());

  }, []);


const showCartDropdown =()=>{
  if(isShownCart){
    return (
      <CartDropdown cartProducts={cartProducts} />
    )
  }
}
const toggleCartDropdown = () =>{
  if(isShownCart){
    dispatch(showCart(false))
  }else {
    dispatch(showCart(true))
  }
}
  const profilePage = () => {
    if (context.isLogged && context.user.role === "admin") {
      return (
        <li>
          <NavLink activeClassName="nav-link-selected" to="/admin/profile">
            Admin Profile
          </NavLink>
        </li>
      );
    }
    if (context.isLogged && context.user.role === "user") {
      return (
        <li>
          <NavLink
            activeClassName="nav-link-selected"
            to={`/user/profile/${context.user._id}`}
          >
            User Profile
          </NavLink>
        </li>
      );
    }
  };
  return (
    <header className="site-header">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <p className="sidebar-header">New Desire Boutique</p>
            {context.isLogged ? (
            <ul>
              <li>Welcome,{context.user?.name}!</li>
              {profilePage()}
            </ul>
          ) : null }
            <li>
              <NavLink activeClassName="nav-link-selected" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-link-selected" to="/shop">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-link-selected" to="/contacts">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-link-selected" to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
        <section className="logo">
          <NavLink to="/">
          <div className="logo-nd">New Desire</div>
          <div className="logo-boutique">Boutique</div>
          </NavLink>
        </section>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="nav-link-selected" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-link-selected" to="/shop">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-link-selected" to="/contacts">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <NavLink to="/">
            <i className="fa fa-search"></i>
          </NavLink>
          {/* <NavLink to="/cart"> */}
            {/* <CartIcon itemCount={totalProducts} /> */}
           {showCartDropdown()}
            <i className="fa fa-shopping-cart" onClick={toggleCartDropdown}>
              <sub>
                {/* <small>{cartProducts.count ? cartProducts.count : 0}</small> */}
                <small>{totalProducts}</small>
              </sub>
            </i>
        {context.isLogged ? (
                <NavLink to="/logout" className="show-icon">
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </NavLink>
          
          ) : (
                <NavLink to="/login" className="show-icon">
                 <i className="fa fa-user" aria-hidden="true"></i>
                </NavLink>
          )}
    
      
        </div>
      
        <div className="second-bar">
          {context.isLogged ? (
            <ul>
              <li>Welcome,{context.user?.name}!</li>
              {profilePage()}
              <li>
                <NavLink to="/logout">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <NavLink to="/login">
                  <i className="fas fa-sign-in-alt"></i> LogIn
                </NavLink>
              </li>
              <li>
                <NavLink to="/register">
                  <i className="fas fa-register-alt"></i> Register
                </NavLink>
              </li>
            </ul>
          )}
        </div>
    
    </header>
  );
};
export default Header;

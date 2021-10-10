import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthContext from "../../contexts/AuthContext";
import CartContext from "../../contexts/CartContext";
import AdminBar from "../Admin/AdminBar"
import { addToCartAction, showCart } from "../../redux/action/cartActions"


import "./index.scss";

const ProductCard = (product) => {
  const { _id, name, description, images, category, price, quantity } = product;
  const authContext = useContext(AuthContext);
  const dispatch = useDispatch();
  const onAddHandler = () => {
    dispatch(addToCartAction(product))
    dispatch(showCart(true))
  };

  return (
    <div className="one-fourth" >
      <div className="product-inner">
        <div className="product-image">
          {images ?  <img src={images[0]} width="100%" height="220px" /> : null}
          {/* <img src={images[0]} width="100%" height="220px" /> */}
        </div>
        <div className="product-info">
          <div className="product-name">
            <h3 className="product-name-tag">{name}</h3>
          </div>
          <div className="product-description">{description}</div>
          <div className="product-bar">
            <div className="product-options">
            
                <div className="product-price-inner">
                  <span className="price">Price: {price}€</span>
                </div>
                <button
                onClick={onAddHandler}
                className="btn-pink"
                >
                 Add To Cart
                </button>
              </div>
            
              {/* <Link className="submit" to={`/product/${_id}`}>
                 View Details
           </Link> */}
               
              
         
          </div>
        </div>
      </div>
    </div >
  );
};
export default ProductCard


import CartDropdownItem from '../CartDropdownItem';
import { NavLink } from "react-router-dom";
import "../cart.scss"
import { showCart } from '../../../redux/action/cartActions';
import { useDispatch, useSelector } from "react-redux";

const CartDropdown = ({cartProducts}) => {
  const dispatch = useDispatch();
  return (
    <div className="cartDropdownContainer">
      <div className="cartItems">
        {cartProducts?.length > 0 ? (
          cartProducts.map((i) => (
            <CartDropdownItem key={i.product._id} {...i} />
          ))
        ) : (
          <div className="emptyMessage">Your cart is empty</div>
        )
        }
      </div>

      <div className="cartDropdownButton"
        onClick={() => {
          // history.push('/checkout');
          // dispatch(toggleCartHidden());
        }}
      >
        <NavLink to="/cart"  onClick={() => {
           dispatch(showCart(false))
        }}>
          GO TO CART
         
        </NavLink>
      </div>
    </div>
  );
}

export default CartDropdown
// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

// export default withRouter(connect(mapStateToProps)(CartDropdown));




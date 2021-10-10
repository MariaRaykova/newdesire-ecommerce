import React from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useDispatch } from "react-redux";
import "../cart.scss"

const CartIcon = ({itemCount}) => {
  
 
  return (
    <div className="cartContainer" >
    <LocalMallOutlinedIcon onClick={toggleCartDropdown} className="shoppingIcon" />
    <div className="itemCountContainer">{itemCount}</div>
  </div>
  )
}
 
 

export default CartIcon

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartIcon);



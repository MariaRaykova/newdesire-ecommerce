import { addToCartStorage, getCartStorage } from '../../utils/cartServices';

import {
  GET_CART_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  DECREMENT_CART_ITEM_QUANTITY,
  INCREMENT_CART_ITEM_QUANTITY,
  EMPTY_CART, 
  SHOW_CART,
  FINISH_ORDER 
} from '../action/cartActions';


const initialState = {
  cartProducts: [{
    product: {},
    count: 0, 
    showCartDropdown: false,
    finishOrder: false
  }],
  totalProducts: 0
};
export const cartReducer = (state = initialState, action) => {
  let newCart;
  let productIndex;

  switch (action.type) {
    case GET_CART_PRODUCTS:
      if(!action.payload.products){
        return {
          ...state,
          cartProducts: []
        }
      }
      return {
        ...state,
        cartProducts: action.payload.products,
        totalProducts: action.payload.totalProducts
      };
    case ADD_PRODUCT_TO_CART:
      newCart = [...state.cartProducts];
      productIndex = newCart.findIndex(item => item.product._id === action.payload._id);
      if (productIndex < 0) {
        newCart.push({ product: {...action.payload}, count: 1 });
        state.totalProducts++;
      } else {
        const updatedObj = { ...newCart[productIndex] };
        updatedObj.count++;
        state.totalProducts++;
        newCart[productIndex] = updatedObj;
      }
      return {
        ...state,
        cartProducts: newCart
      }
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        totalProducts: state.totalProducts - state.cartProducts.find((i) => (i.product._id === action.payload)).count,
        cartProducts: state.cartProducts.filter((i) => (i.product._id !== action.payload)),
      };
    case INCREMENT_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartProducts: state.cartProducts.map(i =>
          i.product.id === action.payload
            ? { ...i, count: i.count + 1 }
            : i,
        ),
        totalProducts:state.totalProducts+1
      };
    case DECREMENT_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartProducts: state.cartProducts.map(i =>
          i.product.id === action.id
            ? {
              ...i,
             count: i.count > 1 ? i.count - 1 : 1,
            }
            : i,
        ),
        totalProducts:state.totalProducts-1
      };
    case EMPTY_CART:
      return {
        ...state,
        cartProducts: action.payload,
        totalProducts: 0
      };
      case SHOW_CART:
        return {
          ...state,
          showCartDropdown: action.payload
        };
        case FINISH_ORDER:
          return {
            ...state,
            finishOrder: action.payload
          };
    default:
      return state;
  }
}

export default cartReducer;
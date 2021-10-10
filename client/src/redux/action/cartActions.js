import store from '../store';

// export const ADD_CART_TO_STORAGE = 'ADD_CART_TO_STORAGE';
export const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY';
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART';
export const SHOW_CART = 'SHOW_CART';
export const FINISH_ORDER = 'FINISH_ORDER';
import {getCartStorage, addToCartStorage, clearCartStorage} from "../../utils/cartServices"

export const loadCart = () => {
    return {
        type: GET_CART_PRODUCTS,
        payload: getCartStorage() ? getCartStorage() : []
    }
}
export const showCart = isShown =>(dispatch)=> {
    dispatch({ 
        type: SHOW_CART,
        payload: isShown
    });
}
export const finishOrder = isFinished =>(dispatch)=> {
    dispatch({ 
        type: FINISH_ORDER,
        payload: isFinished
    });
}
export const addToCartAction = product => (dispatch)=> {
    dispatch(loadCart());
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: product
    });
    addToCartStorage({products: store.getState().cartReducer.cartProducts, totalProducts: store.getState().cartReducer.totalProducts});
};

export const removeProductToCart = productId => (dispatch)=>{
    dispatch({ 
        type: REMOVE_PRODUCT_FROM_CART, 
        payload: productId
    });
    addToCartStorage({products: store.getState().cartReducer.cartProducts, totalProducts: store.getState().cartReducer.totalProducts});
};

export const incrementCartQuantity = productId => dispatch=> {
    dispatch({
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    })
    addToCartStorage({products: store.getState().cartReducer.cartProducts, totalProducts: store.getState().cartReducer.totalProducts});
};

export const decrementCartQuantity = productId => dispatch=> {
    dispatch( {
      type: DECREMENT_CART_ITEM_QUANTITY,
      payload: productId
  })
  addToCartStorage({products: store.getState().cartReducer.cartProducts, totalProducts: store.getState().cartReducer.totalProducts});
};

export const emptyCart = () => {
    clearCartStorage()
    return {
        type: EMPTY_CART,
        payload: []
    }
}
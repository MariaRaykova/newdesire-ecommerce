import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './index.scss';
import {addProductToCart, decrementCartQuantity, incrementCartQuantity, removeProductToCart} from "../../redux/action/cartActions";

const CartItem = (cartItem) => {
    const { product, count} = cartItem
    const [image, setImage] = useState(null)
    const [orderQuantity, setOrderQuantity] = useState(count)
    const dispatch = useDispatch();
    useEffect(()=>{
        product.images ? setImage(product.images[0]) : setImage([])
    },[])

    const removeItem = () => {
        dispatch(removeProductToCart(product._id));
    };
    const handleIncrement= (e) => {
        if(orderQuantity > 0 && orderQuantity <= product.quantity) {
            setOrderQuantity(orderQuantity+1);
            dispatch(incrementCartQuantity(product._id));
        } 
    };
    const handleDecrement= (e) => {
   
          if(orderQuantity  > 1 ) {
              setOrderQuantity(orderQuantity-1);
              dispatch(decrementCartQuantity(product._id));
          } 
      };

    return (
        <div className="table-row">
                <img className="img-responsive" src={image} style={{height: '8%', width: '8%'}} alt={product.name}/>
                <h4 className="product-name"><strong>{product.name}</strong></h4>
            <div className="product-quantity-container">
                <div style={{paddingTop: '5px'}}>
                    <h6><strong>{product.price}€ <span className="text-muted">x</span></strong></h6>
                </div>
                <div >
                    <div className="quantity">
                        <input
                            onClick={handleIncrement}
                            type="button" value="+" className="plus" />
                            <input
                                // onChange={handleQuantityChange}
                                type="number" step="1" max="10" min="1" value={orderQuantity} title="Qty"
                                   className="qty"
                                   size="4" />
                                <input
                                   onClick={handleDecrement}
                                    type="button" value="-" className="minus" />
                    </div>
                </div>
                <div className="col-2 col-sm-2 col-md-2 text-right">
                    <button
                        onClick={removeItem}
                        type="button" className="btn btn-outline-danger btn-xs">
                        <i className="fa fa-trash"  />
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default CartItem;
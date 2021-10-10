import React, { useState, useEffect } from "react";
import { getImagesByProductAction, getSingleProduct } from "../../redux/action/productsActions";
import { decrementCartQuantity, incrementCartQuantity,  addToCartAction } from "../../redux/action/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import ImageThumbnailViewer from "../core/ImageThumbnailViewer";
import "./index.scss"


const ProductPage = () => {
  const match = useRouteMatch();
  const id = match.params.id;
  const product = useSelector((state) => state.productsReducer.product);
  const loading = useSelector((state) => state.productsReducer.loading);
  const images = useSelector((state) => state.productsReducer.images);
  const mainImage = useSelector((state) => state.productsReducer.mainImage);

  const [orderQuantity, setOrderQuantity] = useState(1)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);
  const onAddHandler = () => {
    dispatch(addToCartAction(product))
  };
  const showLoading = () => {
    if (loading) {
      return (
        <div className="alert alert-success">
          <h2>Loading...</h2>
        </div>
      );
    }
  }

  const handleIncrement = (e) => {
    if (orderQuantity > 0 && orderQuantity <= product.quantity) {
      setOrderQuantity(orderQuantity + 1);
      dispatch(incrementCartQuantity(product._id));
    }
  };
  const handleDecrement = (e) => {
    if (orderQuantity > 1) {
      setOrderQuantity(orderQuantity - 1);
      dispatch(decrementCartQuantity(product._id));
    }
  };


  return (
    <PageWrapper>
      {showLoading()}
      <div className="product-section">
        <div className="images-wrapper">
          <ImageThumbnailViewer {...product} />
          {/* {product?.images?.map((i) => (
            <img key={i} src={i} width="150" height="150" />
          ))} */}
        </div>
        <div className="product-info">
          <h3 >{product?.name}</h3>
          <h4>Price: {product?.price} E</h4>
          <div className="product-details">
            Details:
            <div>{product?.description}</div>
          </div>
          <p>Quantity:</p>
          <div className="order-quantity">
           
            <div className="product-quantity-container">
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
            </div>
            <button
              onClick={onAddHandler}
              type="button" className="btn-pink">
              Add to Cart
              {/* <i className="fa fa-trash"  /> */}
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductPage;
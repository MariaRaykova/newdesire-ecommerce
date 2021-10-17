import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./index.scss"
import { } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import { getAllProducts } from "../../../redux/action/productsActions";
import { useDispatch, useSelector } from "react-redux";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import ProductCard from "../../ProductCard";
import { addToCartAction } from "../../../redux/action/cartActions";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCollection() {
  const loading = useSelector((state) => state.productsReducer.loading);
  const products = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();
 


  useEffect(() => {
    dispatch(getAllProducts());
  }, [])


  const showLoading = () => {
    if (loading) {
      return (
        <div className="alert alert-success">
          <h2>Loading...</h2>
        </div>
      );
    }
  };
  const showImages = () => {
    if (products?.length > 0) {
      return (
        <div className="new-collection">
          <div className="header-section">
          <h2>New Collection</h2>
          </div>
          <Swiper
             slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            // pagination={{
            //   "clickable": true
            // }}
            loop
            breakpoints={{
              780: {
                slidesPerView: 5,
                spaceBetween:30,
              },
            }}
            className="mySwiper">
                    {/* style={{ 'max-width': '1200px', 'height': '420px' }}  */}
            {products.filter(product => {
              if(product.new){
                return product
              }
            }          
            ).map((p) => (
              <SwiperSlide key={p._id} className="slide">
       <div className="product-inner">
        <div className="product-image">
          {p.images ?  <img src={p.images[0]}  /> : null}
           <Link className="semi-transparent-button" to={`/product/${p._id}`}><span className="btn-text">Details</span></Link>
        </div>
       
        <div className="product-info">
          <div className="product-name">
            <div className="product-name-tag">{p.name}</div>
          </div>
          <div className="product-bar">
            <div className="product-options">
           
                <div className="product-price-inner">
                  <span className="price">Price: {p.price}€</span>
                </div>
                <button
                onClick={() => dispatch(addToCartAction(p))}
                className="btn-pink"
                >
                Add to cart
                </button>
            
              </div>
           
              {/* <Link className="navigation" to={`/product/${p._id}`}>
                 View Details
           </Link> */}
            
             
           
          </div>
        </div>
      </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )

    }
  }
  return (
    <div className="my-container">
      {loading ? showLoading() : showImages()}
    </div>
  );
}

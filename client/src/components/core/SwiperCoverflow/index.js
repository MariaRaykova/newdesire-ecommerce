import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import "./index.scss"
import { uploadImageAction, addCoverflowImageAction, getCoverflowImageAction } from "../../../redux/action/productsActions";
import { useDispatch, useSelector } from "react-redux";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
  const loading = useSelector((state) => state.productsReducer.loading);
  const coverflowImages = useSelector((state) => state.productsReducer.coverflowImages);
  const dispatch = useDispatch();
  console.log(coverflowImages)
  useEffect(() => {
    dispatch(getCoverflowImageAction())
  },[coverflowImages?.length])
 

  const showLoading = () => {
    if (loading) {
      return (
        <div className="alert alert-success">
          <h2>Loading...</h2>
        </div>
      );
    }
  };
  const showImages= () => {
    if (coverflowImages?.length>0) {
      return(
        <Swiper
        pagination={{
          "dynamicBullets": true
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        slidesPerView={2}
        centeredSlides
        loop
        style={{ height: "400px", width: "1200px" }}
        //на целия контейнер
      >
       {coverflowImages.map((p) => (
         <SwiperSlide key={p._id} >
           <Link to="/shop"></Link>
            <div className="vl"></div>
            <div className="hl"></div>    
                  <img src={p.url} width="360px" height="360px"/>
                  {/* <button className="semi-transparent-button">SHOP HERE</button> */}
                  <Link className="semi-transparent-button" to="/shop"><span className="btn-text">SHOP HERE</span></Link>
          <h1 className="title">{p.type}</h1>
            {/* {" "} */}
        </SwiperSlide>
        ))}
      </Swiper>
      )
     
    }
  }
  return (
    <div className="my-container">
      {loading ? showLoading() : showImages()}
    </div>
  );
}

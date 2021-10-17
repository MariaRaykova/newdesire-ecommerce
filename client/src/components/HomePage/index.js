import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import PageWrapper from "../PageWrapper";
import AuthContext from "../../contexts/AuthContext";
import SwiperCoverflow from "../core/SwiperCoverflow";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProducts, getAllProductsByCategory } from "../../redux/action/productsActions";
import SwiperCollection from "../core/Collection";
import "./index.scss"
const Home = (props) => {


  return (
    <PageWrapper>
       
      <SwiperCoverflow />
      <SwiperCollection />
      <div className="my-container new-section">
        <div className="home-text">
          <h1>New Desire Boutique</h1>
          <hr />
          <p>Browse our collection of necklaces, earrings, rings, and bracelets to find iconic and limited edition products for every look</p>
          <hr />
          <p>Discover our latest styles and curated range for every bejewelled occasion you have in life.</p>
        </div>
        <div className="home-image">
          <img src="https://res.cloudinary.com/dszjcx6ai/image/upload/v1632327204/omd734tauusfauuj3g9z.jpg" />
        </div>
      </div>
    </PageWrapper>
  );
};
export default Home;

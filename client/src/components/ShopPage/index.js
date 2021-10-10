import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import PageWrapper from "../PageWrapper";
import AuthContext from "../../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProducts, getAllProductsByCategory } from "../../redux/action/productsActions";

const Shop = (props) => {
  const context = useContext(AuthContext);
  const [products, setProducts] = useState()
  const productsList = useSelector((state) => state.productsReducer.products);
  const categories = useSelector((state) => state.productsReducer.categories);
  const loading = useSelector((state) => state.productsReducer.loading);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch(); 
  console.log(JSON.stringify(products))
  useEffect(() => {
    dispatch(getAllCategories());
    if (props.match.params.category) {
      dispatch(getAllProductsByCategory(props.match.params.category));
    } else {
      dispatch(getAllProducts());
    }
    if(productsList){
      setProducts(productsList)
    }
  }, []);
 
  console.log()
  const showLoading = () => {
    if (loading) {
      return (
        <div className="alert alert-success">
          <h2>Loading...</h2>
        </div>
      );
    }
  };
  const categoryFilter = () => {
    if (categories) {
      return categories.map((c) => (
        <Link to={`/product/category/${c.name}`} key={c._id}>
          {c.name}
        </Link>
      ))
    }
  }

  return (
    <PageWrapper>
       {loading ? showLoading() : (
         <div>
        <div className="category-filter">
      {categoryFilter()}
      </div>
        <div className="card-container">
          <article className="layout-flex">
            {/* за да заредим всички items */}
            {products?.map((p) => (
              <ProductCard key={p?._id} {...p} />
            ))}
          </article>
        </div>
        </div>
      )}


    </PageWrapper>
  );
};
export default Shop;

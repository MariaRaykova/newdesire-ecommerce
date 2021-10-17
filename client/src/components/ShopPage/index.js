import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import PageWrapper from "../PageWrapper";
import AuthContext from "../../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProducts, getAllProductsByCategory } from "../../redux/action/productsActions";
import "./index.scss"
const Shop = (props) => {
  const context = useContext(AuthContext);
  const [products, setProducts] = useState([])
  const productsList = useSelector((state) => state.productsReducer.products);
  const categories = useSelector((state) => state.productsReducer.categories);
  const loading = useSelector((state) => state.productsReducer.loading);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [message, setMessage] = useState();
  const category = props.match.params.category ? props.match.params.category : '';
 // const [category, setCategory] = useState("");
  useEffect(() => {
    console.log("v useEffect")
    // dispatch(getAllProducts(category, searchKeyword, sortOrder))
    if(props.match.params.category){
      dispatch(getAllProductsByCategory(props.match.params.category))
    }else{
      console.log("v else")
      dispatch(getAllProducts(category, searchKeyword, sortOrder))
    }
    // if(productsList?.length>0){
    //   setProducts(productsList)
    // }
  }, [message,productsList?.length,props.match.params.category]);
  console.log(products)
  
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
    if (categories.length < 1) {
      dispatch(getAllCategories())
    }
    if (categories) {
      return categories.map((c) => (
        <Link to={`/product/category/${c.name}`}  key={c._id}>
          {c.name}
        </Link>
      
      ))
    }
    
  }
  // const showCategories =() =>{
  //   if(category){
  //     dispatch(getAllProducts(category, searchKeyword, sortOrder))
  //   }
  // }
  const clear =()=>{
    setSearchKeyword('');
    setMessage(null);

  }
  const submitHandler = () => {
 
    dispatch(getAllProducts(category, searchKeyword, sortOrder))
     setMessage( `Search ${searchKeyword} results`)
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(getAllProducts(category, searchKeyword, sortOrder))
  };
  const searchMessage = () => {
    if (message) {
      return (
        <div>
          {message}
          <button className="btn-pink" onClick={clear}>Clear filter</button>
        </div>
      )
    }
  };
  return (
    <PageWrapper>
      {loading ? showLoading() : (
        <div className="shop-container">
              <div className="category-filter">
          {categoryFilter()}
          </div>
          <div className="filter">
            <div className="sort-filter">
              Sort By{' '}
              <select name="sortOrder" onChange={sortHandler}>
                <option></option>
                <option value="">Newest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
              </select>
            </div>
            <input
              className="search"
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button className="btn-pink" onClick={submitHandler}>Search</button>
      
          </div>
          {searchMessage()}
          <div className="card-container">
            <article className="layout-flex">

              {/* за да заредим всички items */}
              {productsList?.map((p) => (
                <ProductCard key={p?._id} {...p} />
                // <div>p.category</div>
              ))}
            </article>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};
export default Shop;

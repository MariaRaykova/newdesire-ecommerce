import { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllCategories, uploadImageAction, clearUrl, getSingleProduct } from "../../../redux/action/productsActions";
import AuthContext from "../../../contexts/AuthContext";
import PageWrapper from "../../PageWrapper";
import { createProduct, uploadImage, editProduct } from "../../../utils/adminHandlers";

import ProductCard from "../../ProductCard";

const CreateProduct = () => {

  const history = useHistory();
  const context = useContext(AuthContext);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  const products = useSelector((state) => state.productsReducer.products);
  const categories = useSelector((state) => state.productsReducer.categories);
  const loading = useSelector((state) => state.productsReducer.loading);
  const url = useSelector((state) => state.productsReducer.url);
  const currentProduct = useSelector((state) => state.productsReducer.product);
  const [id, setId ] = useState(null)
 
  const dispatch = useDispatch(false);

  useEffect(() => {
    dispatch(getAllProducts("", "", ""));
    dispatch(getAllCategories());
    if(id){
      dispatch(getSingleProduct(id))
    }
  }, [id]);
  const handleChangeImage = (e) => {
    e.preventDefault();
    dispatch(uploadImageAction(e.target.files[0]))
  };
  const showUploadedImage = () => {
    if (url) {
      return (<img alt="11" src={url} width="80" height="80" />)
    }
  }
 
  // const handleChangeImage = (e) => {
  //   e.preventDefault();
  //   setLoadingUpload(true);
  //   uploadImage(e.target.files[0]).then((data) => {
  //     // if (data.error) {
  //     //   setError({ ...product, error: data.error });
  //     // } else {
  //     setUrl(data.secure_url);
  //     setLoadingUpload(false);
  //     // }
  //   });
  // };
  const handleChangeCategory = (e) => {
    setSelectedCategoryId(e.target.value._id);
    setSelectedCategoryName(e.target.value.name)
  };

  const onCreateSubmitHandler = (e) => {
    e.preventDefault();
    const userId = context.user._id;
    const name = e.target.name.value;
    const description = e.target.description.value;
    const imageUrl = url ? url : e.target.image.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
  
    createProduct({ name, description, imageUrl, selectedCategoryId, selectedCategoryName, price, quantity })
    .then((res) => {
        history.push('/admin/product/create')
        // dispatch(clearUrl())
      })
      // .then(()=>{
      //   setProduct(null)
      // });
    }

    const showProductCard = (product) => {
      return (
        <ProductCard {...product} />
      )
    }
    const handleCheckNewItem = (e) =>{
      if (e.target.checked){
        setId(e.target.value)
      }
    }
  if(currentProduct?._id){
    const newObj = {...currentProduct, isNew: true }
   
    editProduct(currentProduct?._id, newObj)
  }
  
      const showCreateForm = () => (
        <section className="create">
          <form onSubmit={onCreateSubmitHandler}>
            <fieldset>
              <legend>Create Product</legend>
              <p className="field">
                <label htmlFor="name">Name</label>
                <span className="input">
                  <input type="text" name="name" id="name" placeholder="Name" />
                  <span className="actions"></span>
                </span>
              </p>
              <p className="field">
                <label htmlFor="description">Description</label>
                <span className="input">
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                  />
                  <span className="actions"></span>
                </span>
              </p>
              <p className="field">
                <label htmlFor="image">Image URL</label>
                <span className="input">
                  <input
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Image"
                  />
                  <span className="actions"></span>
                </span>
              </p>
              <label className="btn-secondary">
                <input
                  onChange={handleChangeImage}
                  type="file"
                  name="photoFromFile"
                  accept="image/*"
                />
                {showLoading()}
                <div>
                  <p>Uploaded image will be displayed here</p>
                  {showUploadedImage()}
                </div>
              </label>
              {/* <label className="btn btn-secondary">
          <input
            onChange={handleChangeImage}
            type="file"
            name="photoFromFile"
            accept="image/*"
          />
          {showLoadingUpload()}
          {/* <div>
            <h1>Uploaded image will be displayed here</h1>
            <img src={products?.image} alt="" />
          </div> 
        </label> */}
              <p className="field">
                <label htmlFor="price">Price</label>
                <span className="input">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price"
                  />
                  <span className="actions"></span>
                </span>
              </p>
              <p className="field">
                <label htmlFor="quantity">Quantity</label>
                <span className="input">
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    placeholder="Quantity"
                  />
                  <span className="actions"></span>
                </span>
              </p>
              <p className="field">
                <label htmlFor="category">Category</label>
                <select onChange={handleChangeCategory} defaultValue="Categories" >
                  <option>Please select</option>
                  {categories?.map((c) => (
                    <option
                      key={c._id}
                      value={c}
                      className="list-group-item d-flex justify-content-between align-items-center"
                      id={c._id}
                    >
                      {c.name}
                    </option>
                  ))}
                </select>
              </p>
              <input
                className="btn-pink submit"
                type="submit"
                value="Create"
              />
            </fieldset>
          </form>
        </section>

      );
      const productsList = () => (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">

              <h3 className="text-center">All Products</h3>
              <ul className="list-group">
                <li  className="list-group-item">
                <strong>Name</strong>
                    <strong>Description</strong>
                
                    <strong>Price</strong>
                </li>
                {products?.map((p) => (
                  <li
                    key={p._id}
                    className="list-group-item"
                  >
                    <strong>{p.name}</strong>
                    <strong>{p.description}</strong>
                    <strong>{p.price} €</strong>
                    <label htmlFor="check">
                <input type="checkbox" value={p._id} onClick={handleCheckNewItem }  />
                 New
                </label>
                    <Link
                      className=".btn-pink"
                      to={`/admin/product/delete/${p._id}`}
                    >
                      <span className="badge badge-warning badge-pill">Delete</span>
                    </Link>
                    <Link className=".btn-pink" to={`/admin/product/edit/${p._id}`}>
                      <span className="badge badge-warning badge-pill">Edit</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
      const showLoading = () => {
        if (loading) {
          return (
            <div className="alert alert-success">
              <h2>Loading...</h2>
            </div>
          );
        }
      };
      // const showLoadingUpload = () => {
      //   if (loadingUpload) {
      //     return (
      //       <div className="alert alert-success">
      //         <h2>Loading...</h2>
      //       </div>
      //     );
      //   }
      // };
      return (
        <PageWrapper>
          <div className="create-page">
            {showCreateForm()}
            {loading ? showLoading() : productsList()}
            </div>
        </PageWrapper>
      );
    };
    export default CreateProduct;

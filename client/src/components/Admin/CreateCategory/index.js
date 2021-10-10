import React, { useContext, useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import PageWrapper from "../../PageWrapper";
import AuthContext from "../../../contexts/AuthContext";
import { createCategory } from "../../../utils/adminHandlers";
import { getCategories } from "../../../utils/getProductService";

const CreateCategory = () => {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    getCategories().then((res) => setCategories(res));  
  }, []);

  const clickCreateSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    createCategory({ name }).then((data) => {
      setName(data);
      e.target.name.value = "";
      setSuccess(true);
    });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickCreateSubmitHandler}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        {/* <input
type="text"
className="form-control"
onChange={handleChange}
value={name}
autoFocus
required
/> */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          autoFocus
          required
        />
      </div>
      <button type="submit" className="btn btn-outline-primary">
        Create Category
      </button>
    </form>
  );
  const categoriesList = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">All Categories</h2>
          <ul className="list-group">
            {categories.map((c) => (
              <li
                key={c._id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong>{c.name}</strong>
                <Link to={`/admin/category/delete/${c._id}`}>
                  <span className="badge badge-warning badge-pill">Delete</span>
                </Link>
                <Link to={`/admin/category/edit/${c._id}`}>
                  <span className="badge badge-warning badge-pill">Edit</span>
                </Link>
                {/* <span
                onClick={() => deleteCategory(x._id)}
                className="badge badge-danger badge-pill"
              >
                Delete
              </span> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  // const showSuccess = () => {
  //   if (success) {
  //     return <h3 className="text-success">{name} is created</h3>;
  //   }
  // };

  // const showError = () => {
  //   if (error) {
  //     return <h3 className="text-danger">Category should be unique</h3>;
  //   }
  // };

  const goBack = () => (
    <div className="mt-5">
      <Link to="/admin/profile" className="text-warning">
        Back to Profile
      </Link>
    </div>
  );

  return (
    <PageWrapper
      title="Add a new category"
      description={`G'day ${context.user.name}, ready to add a new category?`}
    >
      <main>
        {/* <div className="row">
          <div className="col-md-8 offset-md-2"> */}
        {/* {showSuccess()}
          {showError()} */}
        {newCategoryForm()}

        {goBack()}
        {categoriesList()}

        {/* </div>
        </div> */}
      </main>
    </PageWrapper>
  );
};

export default CreateCategory;

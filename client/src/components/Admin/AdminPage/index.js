import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import PageWrapper from "../../PageWrapper";
import Orders from "../Orders";
import "./index.scss"
import { uploadImageAction,  addCoverflowImageAction } from "../../../redux/action/productsActions";
import { useDispatch, useSelector } from "react-redux";

const AdminPage = () => {
  const history = useHistory();
  const context = useContext(AuthContext);
  const url = useSelector((state) => state.productsReducer.url);


  const loading = useSelector((state) => state.productsReducer.loading);
  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    e.preventDefault();
    dispatch(uploadImageAction(e.target.files[0]))
 
  };
  const onAddImage = (e) => {
    e.preventDefault();
    const type = e.target.type.value
    dispatch(addCoverflowImageAction({ type, url }))
    history.push(`/admin/profile`)
}
const showLoading = () => {
if (loading) {
  return (
    <div className="alert alert-success">
      <h2>Loading...</h2>
    </div>
  );
}
};
  return (
    <PageWrapper>
        <div className="orders">
          <div className="card">
            <h4 className="card-header">Admin Links</h4>
            <ul className="list-group">
              <li className="list-group-product">
                <Link className="nav-link" to="/admin/category/create">
                  Create Category
                </Link>
              </li>
              <li className="list-group-product">
                <Link className="nav-link" to="/admin/product/create">
                  Create Product
                </Link>
              </li>
              <li className="list-group-product">
                <Link className="nav-link" to="/admin/orders">
                  View Orders
                </Link>
              </li>
              <li className="list-group-product">
                <Link className="nav-link" to="/admin/products">
                  Manage Products
                </Link>
              </li>
              <li className="list-group-product">
                <Link className="nav-link" to="/admin/coverflow">
                  Manage Coverflow
                </Link>
              </li>
            </ul>
          </div>
          <Orders />
        </div>

    </PageWrapper>
  );
};
export default AdminPage;

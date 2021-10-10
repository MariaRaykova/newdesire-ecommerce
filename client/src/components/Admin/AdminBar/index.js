import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { addImageAction } from "../../../redux/action/productsActions";


const AdminBar = ({_id}) => {
  const authContext = useContext(AuthContext);
  const userRole = authContext.user?.role
 
  return (
    <div className="row">
      {userRole === "admin" ? (
        <div>
          Admin:
          <Link className="btn-pink" to={`/admin/product/edit/${_id}`}>
            Edit
          </Link>
          <Link className="btn-pink" to={`/admin/image/add/product/${_id}`} >
            Add New Image
          </Link>
          <Link className="btn-pink" to={`/admin/product/create`}>
            Create New Product
          </Link>
        </div>
      ) : null
      }
    </div>
  );
};
export default AdminBar;

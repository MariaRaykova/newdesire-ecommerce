import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../../../contexts/AuthContext";
import PageWrapper from "../../PageWrapper";
import "./index.scss"
import { uploadImageAction, addCoverflowImageAction, clearUrl , getCoverflowImageAction} from "../../../redux/action/productsActions";
import { useDispatch, useSelector } from "react-redux";

const ManageCoverflow = () => {
  const history = useHistory();

  const url = useSelector((state) => state.productsReducer.url);
  const loading = useSelector((state) => state.productsReducer.loading);
  const coverflowImages = useSelector((state) => state.productsReducer.coverflowImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoverflowImageAction())
  },[])

  const handleChangeImage = (e) => {
    e.preventDefault();
    dispatch(uploadImageAction(e.target.files[0]))
  };
  const onAddImage = (e) => {
    e.preventDefault();
    const type = e.target.type.value
    dispatch(addCoverflowImageAction({ type, url }))
    dispatch(clearUrl())
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
  const showImages= () => {
    if (coverflowImages?.length>0) {
      return (
     <div className="coverflow-container">
        {coverflowImages.map((i) => (
          <div className="coverflow-image">
            <h1 className="title">{i.type}</h1>
            <img key={i?._id} src={i?.url}/ >
            <div className="vl"></div>
            <div className="hl"></div>    
            </div>
        ))}
        </div>
      );
    }
  };
  return (
    <PageWrapper>
    <div>
        <form onSubmit={onAddImage}>
          <label className="btn btn-secondary">
            Add Coverflow image
            <input
              onChange={handleChangeImage}
              type="file"
              name="photoFromFile"
              accept="image/*"
            />
            {showLoading()}
            <div className="images-view-wrap">
              <h5>Uploaded image will be displayed here</h5>
              <img src={url} alt="" />
            </div>
            <label htmlFor="type">Type</label>
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Type"
            />
            <button className="btn-pink" type="submit"  >Add this image </button>
          </label>
        </form>
      {loading ? showLoading() : showImages()}
      </div>
    </PageWrapper>
  );
};
export default ManageCoverflow;

import { Link, useRouteMatch, useHistory} from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { addImageAction,uploadImageAction, clearUrl, addImageToList } from "../../../redux/action/productsActions";
import PageWrapper from "../../PageWrapper";

import ProductCard from "../../ProductCard";

const AddImage = () => {
    const match = useRouteMatch();
    const history = useHistory()
    const productId = match.params.id

    const authContext = useContext(AuthContext);
    const userRole = authContext.user?.role

    const url = useSelector((state) => state.productsReducer.url);
    const [imageList, setImageList]= useState([])
  
    const loading = useSelector((state) => state.productsReducer.loading);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(url){
            setImageList([...imageList, url])
           }
    },[url])
   const handleChangeImageFirst = (e) => {
    e.preventDefault();
    dispatch(uploadImageAction(e.target.files[0]))
 
  };
  const handleChangeImageSecond = (e) => {
    e.preventDefault();
    dispatch(uploadImageAction(e.target.files[0]))
  };
  const handleChangeImageThird = (e) => {
    e.preventDefault();
    dispatch(uploadImageAction(e.target.files[0]))
  };
  const handleChangeImageFourth = (e) => {
    e.preventDefault();
    dispatch(uploadImageAction(e.target.files[0]))
  };
    const onAddImage = (e) => {
            dispatch(addImageAction({ productId, imageList }))
            history.push(`/product/${productId}`)
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
       const showImageList = () => {
        if (imageList?.length>0) {
          return (
              <div>
             {imageList?.map((i)=>(
                        <img key={i} src={i}  width="150" height="150" />
                        ))}
                        </div>
          );
        }
      };
   
    return (
        <PageWrapper>
           <h3>Upload:</h3> 
           
            {userRole === "admin" ? (
                <div>
                 <label className="btn btn-secondary">
        <input
          onChange={handleChangeImageFirst}
          type="file"
          name="photoFromFile"
          accept="image/*"
        />
        {showLoading()}
        {/* <div>
          <h1>Uploaded image will be displayed here</h1>
          <img src={products?.image} alt="" />
        </div> */}
      </label>
      <label className="btn btn-secondary">
        <input
          onChange={handleChangeImageSecond}
          type="file"
          name="photoFromFile"
          accept="image/*"
        />
        {/* {showLoading()} */}
        {/* <div>
          <h1>Uploaded image will be displayed here</h1>
          <img src={products?.image} alt="" />
        </div> */}
      </label>
      <label className="btn btn-secondary">
        <input
          onChange={handleChangeImageThird}
          type="file"
          name="photoFromFile"
          accept="image/*"
        />
        {/* {showLoading()} */}
        {/* <div>
          <h1>Uploaded image will be displayed here</h1>
          <img src={products?.image} alt="" />
        </div> */}
      </label>
      <label className="btn btn-secondary">
        <input
          onChange={handleChangeImageFourth}
          type="file"
          name="photoFromFile"
          accept="image/*"
        />
        {/* {showLoading()} */}
        {/* <div>
          <h1>Uploaded image will be displayed here</h1>
          <img src={products?.image} alt="" />
        </div> */}
      </label>
              
                 {/* {showLoading()} */}
                    <div>
                        <p>Uploaded image will be displayed here</p>
                        {/* {imageList?.map((i)=>(
                        <img key={i} src={i}  width="150" height="auto"/>
                        ))} */}
                   {showImageList()}
                        {/* <img src={url}  width="193" height="auto"/> */}
                        <div>
                        <label htmlFor="type">Type</label>
                        <input
                            type="text"
                            name="type"
                            id="type"
                            placeholder="Type"
                        />
                        </div>
                    </div>
                    <button className="btn-pink" onClick={onAddImage} >Add this image </button>
                </div>
            ) : null
            }

        </PageWrapper>
    );
};
export default AddImage;

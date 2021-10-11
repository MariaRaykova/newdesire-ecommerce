import {
  getProduct,
  getProducts,
  getCategories,
  getProductsByCategory,
} from "../../utils/getProductService";
import { uploadImage, createImage, addCoverflowImage,  getCoverflowImage} from "../../utils/adminHandlers"

export const getAllProducts = () => (dispatch) => {
  dispatch({
    type: GET_ALL_PRODUCTS_REQUEST
  });
  getProducts()
    .then((res) => {
      console.log("ot getProducts : " + JSON.stringify(res))
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_PRODUCTS_FAIL,
        payload: { error }
      });
      return error;
    });
};
export const getAllCategories = () => (dispatch) => {
  dispatch({
    type: GET_ALL_CATEGORIES_REQUEST
  });
  getCategories()
    .then((res) => {
      dispatch({
        type: GET_ALL_CATEGORIES_SUCCESS,
        payload: res
      });
      
      return res;
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_CATEGORIES_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_REQUEST
  });
  getProduct(id)
    .then((product) => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: product[0]
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_PRODUCTS_FAIL,
        payload: { err }
      });
      return err;
    });
};

export const getAllProductsByCategory = (queryParam) => (dispatch) => {

  dispatch({
    type: GET_PRODUCTS_BY_CATEGORY_REQUEST
  });
  getProductsByCategory(queryParam)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY_FAIL,
        payload: error
      });
      return error;
    });
};

export const uploadImageAction = (image) => (dispatch) => {
  dispatch({
    type: UPLOAD_IMAGE_REQUEST
  });
  uploadImage(image)
  .then((res) => {
      dispatch({
        type: UPLOAD_IMAGE_SUCCESS,
        payload: res
      });
    })
    .catch((err) => {
      dispatch({
        type: UPLOAD_IMAGE_FAIL,
        payload: { err }
      });
      return err;
    });
};
export const addImageAction = (body) => (dispatch) => {
  dispatch({
    type: ADD_IMAGE_REQUEST
  });
  createImage(body)
  .then((res) => {
      dispatch({
        type: ADD_IMAGE_SUCCESS,
        payload:res
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_IMAGE_FAIL,
        payload: { err }
      });
      return err;
    });
};
export const clearUrl= () => (dispatch) => {
  dispatch({
    type: UPLOAD_IMAGE_CLEAR,
    payload: null
  });
};
export const addCoverflowImageAction = (body) => (dispatch)=>{
  dispatch({
    type: ADD_COVERFLOW_IMAGE_REQUEST
  });
  addCoverflowImage(body)
  .then((res) => {
      dispatch({
        type: ADD_COVERFLOW_IMAGE_SUCCESS,
        payload:res
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_COVERFLOW_IMAGE_FAIL,
        payload: { err }
      });
      return err;
    });
}
export const getCoverflowImageAction = () => (dispatch)=>{
  dispatch({
    type: GET_COVERFLOW_IMAGE_REQUEST
  });
  getCoverflowImage()
  .then((res) => {
    console.log("ot getCoverflowImage : " + res)
      dispatch({
        type: GET_COVERFLOW_IMAGE_SUCCESS,
        payload:res
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_COVERFLOW_IMAGE_FAIL,
        payload: { err }
      });
      return err;
    });
}
export const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAIL = "GET_ALL_PRODUCTS_FAIL";

export const GET_ALL_CATEGORIES_REQUEST = "GET_ALL_CATEGORIES_REQUEST";
export const GET_ALL_CATEGORIES_SUCCESS = "GET_ALL_CATEGORIES_SUCCESS";
export const GET_ALL_CATEGORIES_FAIL = "GET_ALL_CATEGORIES_FAIL";

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";

export const GET_PRODUCTS_BY_CATEGORY_REQUEST =
  "GET_PRODUCTS_BY_CATEGORY_REQUEST";
export const GET_PRODUCTS_BY_CATEGORY_SUCCESS =
  "GET_PRODUCTS_BY_CATEGORY_SUCCESS";
export const GET_PRODUCTS_BY_CATEGORY_FAIL = "GET_PRODUCTS_BY_CATEGORY_FAIL";


export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAIL = "UPLOAD_IMAGE_FAIL";
export const UPLOAD_IMAGE_CLEAR = "UPLOAD_IMAGE_CLEAR";

export const ADD_IMAGE_REQUEST = "ADD_IMAGE_REQUEST";
export const ADD_IMAGE_SUCCESS = "ADD_IMAGE_SUCCESS";
export const ADD_IMAGE_FAIL = "ADD_IMAGE_FAIL";

export const ADD_COVERFLOW_IMAGE_REQUEST = "ADD_COVERFLOW_IMAGE_REQUEST";
export const ADD_COVERFLOW_IMAGE_SUCCESS = "ADD_COVERFLOW_IMAGE_SUCCESS";
export const ADD_COVERFLOW_IMAGE_FAIL = "ADD_COVERFLOW_IMAGE_FAIL";

export const GET_COVERFLOW_IMAGE_REQUEST = "GET_COVERFLOW_IMAGE_REQUEST";
export const GET_COVERFLOW_IMAGE_SUCCESS = "GET_COVERFLOW_IMAGE_SUCCESS";
export const GET_COVERFLOW_IMAGE_FAIL = "GET_COVERFLOW_IMAGE_FAIL";

import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCTS_BY_CATEGORY_REQUEST,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS,
  GET_PRODUCTS_BY_CATEGORY_FAIL, 
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  UPLOAD_IMAGE_CLEAR,
  ADD_IMAGE_REQUEST,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_FAIL,
  ADD_COVERFLOW_IMAGE_REQUEST,
  ADD_COVERFLOW_IMAGE_SUCCESS,
  ADD_COVERFLOW_IMAGE_FAIL,
  GET_COVERFLOW_IMAGE_REQUEST,
  GET_COVERFLOW_IMAGE_SUCCESS,
  GET_COVERFLOW_IMAGE_FAIL,
} from "../action/productsActions";

const initialState = {
  products: null,
  categories: [],
  product: {},
  url: null,
  images: [],
  mainImage: null,
  loading: false,
  error: null,
  imageList: [], 
  coverflowImages: [],
};
export const prodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_ALL_CATEGORIES_SUCCESS:

      return {
        loading: false,
        categories: action.payload
      };
    case GET_ALL_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        images: action.payload.images,
        mainImage: action.payload.images[0]
      };

    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case GET_PRODUCTS_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };

    case GET_PRODUCTS_BY_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
      case UPLOAD_IMAGE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          url:null,
        };
      case UPLOAD_IMAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          url: action.payload.secure_url
        };
      case UPLOAD_IMAGE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
        case UPLOAD_IMAGE_CLEAR:
          return {
            ...state,
            url: action.payload
          };
         
        case ADD_IMAGE_REQUEST:
          return {
            ...state,
            loading: true,
            error: null
          };
        case ADD_IMAGE_SUCCESS:
          return {
            ...state,
            loading: false,
            url: action.payload.url
          };
        case ADD_IMAGE_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload.error
          };
          case ADD_COVERFLOW_IMAGE_REQUEST:
            return {
              ...state,
              loading: true,
              error: null
            };
          case ADD_COVERFLOW_IMAGE_SUCCESS:
            return {
              ...state,
              loading: false,
              url: action.payload.url
            };
          case ADD_COVERFLOW_IMAGE_FAIL:
            return {
              ...state,
              loading: false,
              error: action.payload.error
            };
            case GET_COVERFLOW_IMAGE_REQUEST:
              return {
                ...state,
                loading: true,
                error: null
              };
            case GET_COVERFLOW_IMAGE_SUCCESS:
        
              return {
                ...state,
                loading: false,
                coverflowImages: action.payload
              };
            case GET_COVERFLOW_IMAGE_FAIL:
              return {
                ...state,
                loading: false,
                error: action.payload.error
              };
    default:
      return state;
  }
};

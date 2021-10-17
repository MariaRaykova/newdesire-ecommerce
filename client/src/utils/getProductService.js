import { API } from "../config";
import queryString from "query-string";

export const getCategories = () => {
  return fetch(`${API}/api/category`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const getProducts = () => {
  return fetch(`${API}/api/product`)
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getProduct = (id) => {
  return fetch(`${API}/api/product/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

// export const getProductsByCategory = (queryParam) => {

//   return fetch(`${API}/api/category/${queryParam}`)
//     .then((res) => res.json())
//     .catch((err) => {
//       console.log(err);
//     });
// };


export const getProductsByCategory = (queryParam) => {
  const category = queryParam ? queryParam : ""
  return fetch(`${API}/api/product/category/${category}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};
// export const list = params => {
//   const query = queryString.stringify(params);
//   console.log("query", query);
//   return fetch(`${API}/api/product/search?${query}`, {
//     method: "GET"
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };

// export const listProducts = (category = '', searchKeyword = '', sortOrder = '') => {
//   return fetch('${API}/api/product?category='+category +'&searchKeyword='+searchKeyword+'&sortOrder='+sortOrder)
//     .then((res) => {
//       return res.json()
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// const listProducts = (
//   category = '',
//   searchKeyword = '',
//   sortOrder = ''
// ) => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_LIST_REQUEST });
//     const { data } = await axios.get(
//       '/api/products?category=' +
//         category +
//         '&searchKeyword=' +
//         searchKeyword +
//         '&sortOrder=' +
//         sortOrder
//     );
//     dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//   }
// };
import {API} from '../config';

export const getCategories = () => {
    return fetch(`${API}/api/category`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  export const getProducts = () => {
    return fetch(`${API}/api/product`)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };
  export const getProduct = (id) => {
    return fetch(`${API}/api/product/${id}`)
      .then((res) => {
      
       return  res.json()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  export const getProductsByCategory = (queryParam) => {
    const category = queryParam ? queryParam : ""
    return fetch(`${API}/api/product/${category}`)
      .then((res) =>  res.json())
      .catch((err) => {
        console.log(err);
      });
  };
  
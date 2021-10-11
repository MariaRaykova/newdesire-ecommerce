import { API } from "../config";

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

export const getProductsByCategory = (queryParam) => {

  return fetch(`${API}/api/category/${queryParam}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};



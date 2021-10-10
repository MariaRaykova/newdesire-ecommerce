import { API } from "../config";

export const createCategory = (body) => {
  return fetch(`${API}/api/category`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCategory = (id) => {
  return fetch(`${API}/api/category/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};
export const createProduct = (body) => {
  return fetch(`${API}/api/product`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("token")
    }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const editProduct = (id, body) => {
  return fetch(`${API}/api/product/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("token")
    }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const createImage = (body) => {
  return fetch(`${API}/api/product/image`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const uploadImage = (image) => {

  const data = new FormData();

  data.append("file", image);
  data.append("upload_preset", "react_ecommerce");
  return fetch("https://api.cloudinary.com/v1_1/dszjcx6ai/image/upload", {
    method: "POST",
    body: data
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const addCoverflowImage = (body) => {
  return fetch(`${API}/api/image`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getCoverflowImage = () => {
  return fetch(`${API}/api/image`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

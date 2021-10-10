import { API } from "../config";
export const createOrder = (body) => {
  return fetch(`${API}/api/order`, {
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
export const ordersHandler = () => {
  return fetch(`${API}/api/order`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const userOrdersHandler = (id) => {
  return fetch(`${API}/api/order/${id}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

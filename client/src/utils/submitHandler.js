import { API } from "../config";

export const logInHandler = (body) => {
  return fetch(`${API}/api/user/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => {
      window.localStorage.setItem("token", res.headers.get("Authorization"));
      return res.json();
    })
};

export const registerHandler = (body) => {
  return fetch(`${API}/api/user/register`, {
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

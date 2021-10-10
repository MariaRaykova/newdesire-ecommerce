import { isAuthenticated } from "../utils/auth";
import { API } from "../config";

export const getVerifiedUser = () => {
  const token = isAuthenticated();
  return fetch(`${API}/api/user/verify`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  }).then((promise) => {
    return promise.json();
  });
};

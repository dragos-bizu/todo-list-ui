import { API_PATH } from "../constants/APIPath";

function ajax(args) {
  const { url, method, body } = args;
  const headers = { "Content-Type": "application/json" };

  const fetchData = {
    headers: headers,
    body: body || null,
    method: method || "GET",
  };

  return fetch(API_PATH + url, fetchData).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      error.status = response.status;
      throw error.response;
    }
  });
}

export default ajax;

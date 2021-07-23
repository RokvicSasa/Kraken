// import store from "../store.js";
const API_ENDPOINT = "http://localhost:1337/";

var apiHeaders = new Headers();
apiHeaders.append("Content-Type", "application/json");
var getData = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

var postData = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const apiLogin = async (username, password, callback) => {
  
  postData.body = JSON.stringify({ identifier: username, password: password });
  fetch(`${API_ENDPOINT}auth/local`, postData)
    .then((response) => response.json())
    .then((responseJson) => {
      callback(responseJson);
    })
    .catch((error) => {
      callback(error);
    });
};



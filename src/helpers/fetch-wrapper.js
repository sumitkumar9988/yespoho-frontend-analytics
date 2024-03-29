import { store, authActions } from "../store/index";

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE")
};

function request(method) {
  return (url, body) => {
    const requestOptions = {
      method,
      headers: authHeader(url)
    };
    console.log("body", requestOptions);
    console.log("url", url, body);
    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions).then(handleResponse);
  };
}

function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const token = authToken();
  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
  if (isLoggedIn && isApiUrl) {
    return { 'x-access-token': token };
  } else {
    return {};
  }
}

function authToken() {
  return store.getState().auth.user?.accessToken;
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log("data", data);
    if (!response.ok) {
      if ([401, 403].includes(response.status) && authToken()) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        const logout = () => store.dispatch(authActions.logout());
        logout();
      }

      const error = (data && data.message) || response.statusText;
      console.log(error.message);
      return Promise.reject(error);
    }

    return data;
  });
}

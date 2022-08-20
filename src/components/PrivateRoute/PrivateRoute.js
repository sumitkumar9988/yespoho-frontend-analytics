/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default { PrivateRoute };

function PrivateRoute({ children }) {
  // import { useSelector } from "react-redux";
  // const { user: authUser } = useSelector((x) => x.auth);
  // console.log("protected route", authUser);
  // if (!authUser) {
  //   // not logged in so redirect to login page with the return url
  //   return <Redirect to="/" />;
  // }

  // authorized so return child components
  return children;
}

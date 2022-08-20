import React, { useState, useEffect } from "react";
import { Label, Input, Button } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";
import { authActions } from "./../store/index";
import { useSelector, useDispatch } from "react-redux";
import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();
  const authUser = useSelector((x) => x.auth.user);
  const authError = useSelector((x) => x.auth.error);

  console.log("authUser", authUser);
  console.log("authError", authError);

  useEffect(() => {
    if (authError) {
      setError(authError.message);
    }
  }, [authError]);

  console.log("error", error);

  useEffect(() => {
    // redirect to home if already logged in
    if (authUser) history.push("/app/dashboard");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  function onSubmit() {
    return dispatch(
      authActions.login({ username: username, password: password })
    );
  }

  return (
    <div>
      {/* {authError && } */}
      {/* <Alert type="success">Lorem ipsum dolor sit</Alert> */}
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src={ImageLight}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src={ImageDark}
                alt="Office"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <Label>
                  <span>Email</span>
                  <Input
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1"
                    type="email"
                    placeholder="john@doe.com"
                  />
                </Label>

                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1"
                    type="password"
                    placeholder="***************"
                  />
                </Label>

                {error && (
                  <Label className="mt-4 text-red-200">
                    <span className="text-red-400">{error}</span>
                  </Label>
                )}

                <Button onClick={onSubmit} className="mt-4">
                  Log in
                </Button>

                {/* <hr className="my-8" /> */}

                {/* <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p> */}
                {/* <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p> */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const ProductTable = lazy(() => import("../pages/ProductTable"));
const UserTable = lazy(() => import("../pages/UserTable"));
const Users = lazy(() => import("../pages/Users"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard // view rendered
  },
  {
    path: "/product", // the url
    component: ProductTable // view rendered
  },
  {
    path: "/users", // the url
    component: UserTable // view rendered
  },

  {
    path: "/user/:id",
    component: Users
  },
  {
    path: "/404",
    component: Page404
  },
  {
    path: "/blank",
    component: Blank
  }
];

export default routes;

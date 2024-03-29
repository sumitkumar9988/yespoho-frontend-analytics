/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard" // name that appear in Sidebar
  },
  {
    path: "/app/users", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Top Users" // name that appear in Sidebar
  },
  {
    path: "/app/product", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Most Visited Product" // name that appear in Sidebar
  }
];

export default routes;

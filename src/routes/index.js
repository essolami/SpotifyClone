import { Home, NotFound } from "../pages";

const routes = [
  // {
  //     path: "/about",
  //     component: About,
  //     exact:true
  // },
  // {
  //     path: "/contact",
  //     component: Contact,
  //     exact:true
  // },
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    component: NotFound,
  },
];

export default routes;

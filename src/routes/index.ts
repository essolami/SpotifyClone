import { About, Contact, Home, NotFound } from "../pages";

const routes = [
  {
    path: "/contact",
    component: Contact,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
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

import React from "react";
import Home from "../components/home";
import Details from "../components/product/Details"
import HomeLayout from "../layouts/HomeLayout";
import Basket from "../components/basket";
import Favorites from "../components/favorites";
import List from "../components/home/header/search/list";

const Error = () => {
  return <div>404 Not Found!</div>;

};
const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "basket",
        element: <Basket />
      },
      {
        path: "favorites",
        element: <Favorites />
      },
      {
        path: "lists",
        element: <List />
      },
      {
        path: ":id",
        element: <Details />
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;


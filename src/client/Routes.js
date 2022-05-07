import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UsersList, { loadData } from "./components/UsersList";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    loadData: loadData,
    path: "/users",
    component: UsersList,
  },
];

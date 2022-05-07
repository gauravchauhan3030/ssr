import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/users",
    component: UsersList,
  },
];

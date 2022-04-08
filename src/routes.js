import React from "react";
import { Redirect } from "react-router-dom";

import { UserLayout } from "./user/layouts";
import { DefaultLayout } from "./admin/layouts";


//Route Admin
import BlogOverview from "./admin/views/BlogOverview";
import UserProfileLite from "./admin/views/UserProfileLite";
import AddNewPost from "./admin/views/AddNewPost";
import Errors from "./admin/views/Errors";
import ComponentsOverview from "./admin/views/ComponentsOverview";
import Tables from "./admin/views/Tables";
import BlogPosts from "./admin/views/BlogPosts";

//Route Views
import Home from "./user/views/Home";

export default [
  {
    path: "/",
    exact: true,
    layout: UserLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    layout: UserLayout,
    component: Home
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];

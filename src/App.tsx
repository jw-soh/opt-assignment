import React from "react";
import AddPost from "./components/AddPost";
import PostsList from "./features/posts/PostsList";
import Header from "./components/Header";
import { Outlet, Link } from "react-router-dom";
import SimpleBottomNavigation from "./components/BottomNavigation";
import "./App.css";

function App() {
  // all components between div tags below will persist across all pages
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

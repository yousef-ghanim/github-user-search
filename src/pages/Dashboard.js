import React from "react";
import loadingImage from "../images/preloader.gif";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Search from "../components/Search";
import Repos from "../components/Repos";
import User from "../components/User";
const Dashboard = () => {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <Info />
      <User />
      {/* <Repos /> */}
    </main>
  );
};

export default Dashboard;

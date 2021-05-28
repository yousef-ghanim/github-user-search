import React from "react";
import loadingImage from "../images/preloader.gif";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Search from "../components/Search";
import User from "../components/User";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading" className="loading-img" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
    </main>
  );
};

export default Dashboard;

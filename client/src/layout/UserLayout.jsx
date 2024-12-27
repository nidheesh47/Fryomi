import React, { use, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";
import UserHeader from "../components/user/UserHeader";

function UserLayout() {
  const [isUserAuth, setIsUserAuth] = useState(true);
  return (
    <div>
      {isUserAuth ? <UserHeader /> : <Header />}
      <div className="min-h-96">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout;

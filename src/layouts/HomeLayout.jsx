import React from "react"
import { Link, Outlet } from "react-router-dom";
import { Header } from "../components/home/header";

function HomeLayout() {
  return (
    <React.Fragment>
      <div className="flex flex-col  max-w-full w-full w-min-content min-h-screen ">
          <Header/> 
          <div className="flex-grow  container m-auto max-w-6xl" >
            <Outlet/>
          </div>
        <footer className="w-full min-h-[150px] bg-customBlue   p-6 text-white ">
        </footer>
      </div>
    </React.Fragment>
  );
}

export default HomeLayout;
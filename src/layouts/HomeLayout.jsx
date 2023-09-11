import React from "react"
import { Outlet } from "react-router-dom";
import { Header } from "../components/home/header";

function HomeLayout() {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full h-full ">
          <Header/> 
          <div className="flex-1  container m-auto max-w-6xl" >
            <Outlet/>
          </div>

        <footer className="w-full min-h-[175px] bg-customBlue mt-auto  ">
        
        </footer>
      </div>
    </React.Fragment>
  );
}

export default HomeLayout;
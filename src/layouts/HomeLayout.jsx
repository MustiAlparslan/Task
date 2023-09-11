import React from "react"
import { Link, Outlet } from "react-router-dom";
import { Header } from "../components/home/header";

function HomeLayout() {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full h-full ">
          <Header/> 
          <div className="flex-1  container m-auto max-w-6xl" >
            <Outlet/>
          </div>

        <footer className="w-full min-h-[150px] bg-customBlue mt-auto  p-6 text-white ">
          <div>
            <div>
              <Link  className="font-light hover:opacity-50 hover:border-b" to={'/'}>Anasayfa</Link>
            </div>
            <div>
              <Link  className="font-light hover:opacity-50 hover:border-b " to={'/favorites'}>Favoriler</Link>
            </div>
            <div>
              <Link className="font-light hover:opacity-50 hover:border-b"  to={'basket'}>Sepetim</Link>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default HomeLayout;
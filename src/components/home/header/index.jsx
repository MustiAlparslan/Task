import React from "react"
import { Link } from "react-router-dom"
import { NavBar } from "./nav"
import { SearchBar } from "./search"
import LOGO from '../../../images/Logo.png';

export const Header = () => {
    return (
        <header className="border-b-2 shadow-md border-[#ddd] w-full h-16 flex items-center justify-around py-10 mb-2">
            <div className="max-w-2xl	w-full  flex items-center gap-5">
                <Link to="/" className="text-5xl  w-32 md:w-52	     "><img src={LOGO} alt="LOGO" /> </Link>
                <SearchBar />
            </div>
            <NavBar />
        </header>
    )
}
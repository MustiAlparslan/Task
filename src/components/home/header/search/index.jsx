import React, { useEffect, useState } from "react"
import { AiOutlineSearch } from "../../../../icons"
import { Requests } from "../../../../requests/requests"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setSearchList } from "../../../../features/SearcListSlice"
import classNames from "classnames"

export const SearchBar = () => {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isSmScreen, setIsSmScreen] = useState(window.innerWidth >= 640);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        const handleResize = () => {
            setIsSmScreen(window.innerWidth > 640);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getSearch = async (e) => {
        e.preventDefault();
        const res = await Requests.searchList(value);
        if (res) {
            dispatch(setSearchList(res));
            navigate('/lists');
        }
        setValue("")
    };

    return (
        <form onSubmit={getSearch} 
            className={classNames(
                "flex items-center border rounded-full bg-customBlue p-1",
                {
                    "w-24 md:w-1/2": !isFocused || isSmScreen,
                    "w-full": isFocused && !isSmScreen
                }
            )} >
            <input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)} F
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="iphone, hp..."
                className="shadow-lg outline-none    rounded-full  border-none   w-full h-7 md:h-8   radius-lg text-xs px-1"
            />
            <button disabled={!value.trim()}>
                <AiOutlineSearch size={21} color="white" className="cursor-pointer hover:opacity-90 mx-3" />
            </button>
        </form>
    )
}


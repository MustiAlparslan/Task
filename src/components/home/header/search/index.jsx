import React, { useEffect } from "react"
import {AiOutlineSearch} from "../../../../icons"
import { Requests } from "../../../../requests/requests"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setSearchList } from "../../../../features/SearcListSlice"

export const SearchBar = () =>{
    const [value,setValue] = React.useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getSearch = async (e) => {
        e.preventDefault()
        const res = await Requests.searchList(value)
        if(res){
            dispatch(setSearchList(res))
            navigate('/lists')
        }
    }

    return (
        <form onSubmit={getSearch} className="flex items-center     border rounded-full w-full bg-customBlue p-1" >
            <input 
                value={value}   
                onChange={e => setValue(e.target.value)}  
                placeholder="Ara..." 
                className="shadow-lg outline-none   rounded-full  border-none   w-full h-8 radius-lg text-xs px-1"
            />
            <button >
                <AiOutlineSearch size={21} color="white" className="cursor-pointer hover:opacity-90 mx-3"/>
            </button>
        </form>
    )
}


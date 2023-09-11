import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Product from "../../../product";
import { useSelector } from "react-redux";

export default function List(){
  const searchList =useSelector(state => state.searchList.searchList)

  useEffect(() => {
    console.log('state' , searchList)
  }, [])

  const ListProducts = () => {
    return (
        <div className="flex gap-3">
            {searchList?.map(itm => (
                    <Product data={itm} key={itm?.id}  />
            ))}
        </div>
    )
  }
  

    return (
        <div>
            <h2>({searchList?.length}) sonuç listelendi</h2>
            <div></div>
            <div>
               <ListProducts/> 
            </div>
        </div>
    )
}
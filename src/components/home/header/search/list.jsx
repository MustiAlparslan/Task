import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Product from "../../../product";
import { useSelector } from "react-redux";

export default function List() {
    const searchList = useSelector(state => state.searchList.searchList)


    const ListProducts = () => {
        return (
            <div
                className="w-full flex items-center flex-wrap   gap-3 md:gap-3 ">
                {searchList?.map(itm => (
                    <Product data={itm} key={itm?.id} />
                ))}
            </div>
        )
    }


    return (
        <div>
            <h2 className="mb-1">Sonuç listelendi ({searchList?.length}) </h2>
            <div>
                <ListProducts />
            </div>
        </div>
    )
}
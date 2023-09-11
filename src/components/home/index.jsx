import React, { useEffect, useState } from "react"
import {SliderHero} from "../slider"
import { ListAllProducts } from "./components/ListAllProduct";
import { Requests } from "../../requests/requests";

export default function Home() {
    const [products,setProducts] = useState([])

    const getData = async () => {
        const res = await Requests.getProduct()
        setProducts(res)
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    return (
        <>
            <SliderHero/>
            <div className="my-8">
                <ListAllProducts data={products}/>
            </div>
        </>
    );
}

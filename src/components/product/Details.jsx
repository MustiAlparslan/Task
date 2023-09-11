import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setBasket } from '../../features/BasketSlice'
import { Comments } from "./components/Coments"
import { Star } from "./components/Star"
import Slider from "react-slick"

function Details() {
  const { state } = useLocation() 
  const dispatch = useDispatch()

  const addBasket = () => {
    dispatch(setBasket(state))
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="flex border shadow mb-3">
        <div className="rounded w-72 mb-6 px-2 py-1 ">
          <Slider {...settings}>
            {state?.images?.map((itm, index) => (
              <img key={index} src={itm} alt={state?.productName} className="w-72 mr-2 h-96 object-contain" />
            ))}
          </Slider>
        </div>

        <div className="flex-1 bg-[#eee] rounded  px-6 py-6">
          <Star rating={state?.rating} size={"19"} textSize="text-md" />
          <p className="font-bold  ">{state?.title}</p>
          <h2 className="font-bold text-customBlue text-sm" >{state?.brand}</h2>
          <ul className="my-3">
            <li>{state?.description}</li>
          </ul>
          <button className="bg-customBlue hover:bg-white hover:text-customBlue   hover:border hover:border-customBlue px-3 py-1 rounded text-white font-semibold   w-48" onClick={addBasket}>{state?.price} <span>TL</span></button>
        </div>
      </div>

      {/* <Comments state={state} /> */}
    </div>
  );
}

export default Details;
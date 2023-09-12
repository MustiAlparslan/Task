import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setBasket } from '../../features/BasketSlice'
import { Comments } from "./components/Coments"
import { Star } from "./components/Star"
import Slider from "react-slick"
import { FavoriteButton } from "./components/FavoriteButton"
import toast from "react-hot-toast"

function Details() {
  const { state } = useLocation()
  const dispatch = useDispatch()

  const addBasket = () => {
    dispatch(setBasket(state))
    toast.success("Sepete eklendi")
  }
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="border-black hover:opacity-50 cursor-pointer bg-[#475569] text-white w-6 flex items-center h-6 font-semibold text-lg pb-[2px] justify-center rounded-full"
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-20px',
          zIndex: 1,
          transform: 'translateY(-50%)',
        }}
      >
        {'>'}
      </div>
    );
  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="  border-black hover:opacity-50 cursor-pointer bg-[#475569] text-white w-6 flex items-center h-6 font-semibold text-lg pb-[2px] justify-center rounded-full"
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: '-20px',
          zIndex: 1,
          transform: 'translateY(-50%)',
        }}
      >
        {'<'}
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div >
      <div className="flex mx-7 border flex-col md:flex-row  shadow mb-3">
        <div className="rounded w-full  md:w-72 mb-6 px-2 py-1 ">
          <Slider {...settings} >
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
          <div className="flex items-center gap-1">
            <button className="bg-customBlue hover:bg-white hover:text-customBlue   hover:border hover:border-customBlue px-3 py-1 rounded text-white font-semibold   w-48" onClick={addBasket}>{state?.price} <span>TL</span></button>
            <FavoriteButton data={state} size={21} className="text-red-300" />
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default Details;
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductActions from "./components/ProductActions";
import { FavoriteButton } from "./components/FavoriteButton";
import { Star } from "./components/Star";
import { motion } from "framer-motion";

function Product({ data, from, variant }) {

  const saveDataToLocalStorage  = (data) => {
    localStorage.setItem("details", JSON.stringify(data))
  }

  return (
    <motion.div
      className="hover:shadow-2xl	 mb-1 md:mb-6	cursor-pointer shadow-md  relative border p-2  w-[145px] md:w-[215px]  rounded-md"
      whileHover={{ scale: 1.1 }}
      variants={variant}
    >
      {from !== "favorites" && <FavoriteButton isAbsolute={true} data={data} />}

      <Link to={"/" + data?.title.toLowerCase()} state={data} onClick={() => saveDataToLocalStorage(data)}>
        <img src={data?.images[0]} alt={data?.title} className="object-contain w-full	  md:h-48 h-24" />
        <h2 className="md:text-sm text-xs truncate font-semibold" title={data?.title}>{data?.title}</h2>
        <Star rating={data?.rating} />
      </Link>

      <div>
        <h6 className="text-xs">{data?.brand}</h6>
        <p className="text-red-700 font-semibold">{data?.price} <span>TL</span></p>
      </div>
      <ProductActions data={data} from={from} />
    </motion.div>
  );
}

export default Product;
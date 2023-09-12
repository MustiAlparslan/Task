import { useState } from "react";
import { Link } from "react-router-dom";
import ProductActions from "./components/ProductActions";
import { FavoriteButton } from "./components/FavoriteButton";
import { Star } from "./components/Star";
import { motion } from "framer-motion";

function Product({ data, from, variant }) {

  return (
    <motion.div
      className="hover:shadow-2xl	 mb-2 md:mb-6	cursor-pointer shadow-md  relative border p-2  w-[140px] md:w-[215px]  rounded-md"
      variants={variant}
    >
      {from !== "favorites" && <FavoriteButton data={data} />}

      <Link to={"/" + data?.title.toLowerCase()} state={data}>
        <img src={data?.images[0]} alt={data?.title} className="object-contain w-full	  md:h-48 h-24" />
        <h2 className="md:text-sm text-xs truncate font-semibold">{data?.title}</h2>
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
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductActions from "./components/ProductActions";
import { FavoriteButton } from "./components/FavoriteButton";
import { Star } from "./components/Star";

function Product({data, from, variant}) {

  return (
        <motion.div
              className="hover:shadow-2xl	 mb-6	cursor-pointer shadow-md  relative border py-2 px-2  w-[150px] md:w-[230px]  rounded-md"
              variants={variant}
              >
              {from !== "favorites" && <FavoriteButton data={data}  /> }

            <Link to={"/" + data?.title.toLowerCase()} state={data}>
              <img src={data?.images[0]} alt={data?.title} className="object-contain w-full	  h-52"/>
              <h2 className="text-sm truncate font-semibold">{data?.title}</h2>
                <Star rating={data?.rating} />

            </Link>
              <div>
              <h6 className="text-xs">{data?.brand}</h6>
              <p className="text-red-700 font-semibold">{data?.price} <span>TL</span></p>                
            </div>
            <ProductActions data={data}  from={from} />
        </motion.div>
  );
}

export default Product;
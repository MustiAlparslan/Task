import React, { useEffect } from "react"
import Product from "../../product";
import { motion } from "framer-motion";

export const ListAllProducts = ({ data }) => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full flex items-center flex-wrap md:justify-between justify-center ">
      {data && data?.map(product => (
        <Product data={product} key={product?.id} variant={item} />
      ))}
    </motion.div>
  );
}

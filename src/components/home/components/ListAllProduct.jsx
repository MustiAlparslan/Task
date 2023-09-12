import React, { useEffect, useState } from "react"
import Product from "../../product";
import { motion } from "framer-motion";
import { FakeLoading } from "../../product/components/FakeLoading";

export const ListAllProducts = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
    }
  }, [data]);

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
    <>
      {isLoading ? (
        <div
          className="w-full flex flex items-center flex-wrap md:justify-between justify-evenly gap-3 md:gap-0 ">
          {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((itm,index) => (
            <FakeLoading key={index} />
          ))}
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full flex items-center flex-wrap md:justify-between justify-evenly gap-3 md:gap-0 ">
          {data && data?.map(product => (
            <Product data={product} key={product?.id} variant={item} />
          ))}
        </motion.div>
      )}
    </>
  );
}

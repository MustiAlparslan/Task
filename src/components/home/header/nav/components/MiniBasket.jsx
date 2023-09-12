import { useEffect } from "react";
import { useSelector } from "react-redux"
import { calcPrice } from "../../../../../utils/consts"
import { totalMoney } from "../../../../../features/BasketSlice"
import { useAnimate, stagger, motion } from "framer-motion";


const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".test", { rotate: isOpen ? 360 : 0 }, { duration: 0.2 });

        animate(
            "div",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)"
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5
            }
        );

        animate(
            "div",
            isOpen
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: isOpen ? staggerMenuItems : 0
            }
        );
    }, [isOpen]);

    return scope;
}

export function MiniBasket({ isHovered }) {
    const basketList = useSelector(state => state.basket.basket)
    const TOTAL = totalMoney(basketList)
    const scope = useMenuAnimation(isHovered);

    return (
        <motion.div
            ref={scope}
            whileTap={{ scale: 0.97 }} className=" absolute w-64 z-40	drop-shadow-2xl	flex flex-col 	 h-[300px]  left-[-50px] bg-white  rounded-lg ">
            <div className="flex-grow">
                {
                    basketList && basketList.map(item => (
                        <div className="test mb-[2px] shadow   gap-1  border-b flex py-2 px-2 overflow-y-auto items-center">
                            <div>
                                <img src={item?.images[0]} alt={item?.title} className="object-contain w-12 rounded-md" />
                            </div>
                            <div>
                                <div className="text-xs  truncate font-semibold">
                                    {item?.title}
                                </div>
                                <div className="text-xs">
                                    <span className="font-semibold">{item?.quantity}</span> <span className="font-italic">adet</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full h-12 flex items-center  text-white px-1 bg-customBlue">
                <span className="pr-1">Toplam Tutar: </span> {calcPrice(TOTAL)} TL
            </div>
        </motion.div>
    )
}
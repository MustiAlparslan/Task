import { useEffect } from "react";
import { useSelector } from "react-redux"
import { calcPrice } from "../../../../../utils/consts"
import { totalMoney } from "../../../../../features/BasketSlice"
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export function MiniBasket({ isHovered }) {
    const basketList = useSelector(state => state.basket.basket)
    const TOTAL = totalMoney(basketList)

    return (
        <div className="absolute w-64 z-40 drop-shadow-2xl	 shadow-lg bg-white left-[-100%] rounded ">

            <div
                className=" flex flex-col	overflow-y-auto    rounded">
                <div className="flex-grow">
                    {
                        basketList.length ? basketList.map(item => (
                            <div key={item?.id} className="test mb-[2px] shadow   gap-1 justify-between border-b flex py-2 px-2  items-center">
                                <div className="flex items-center gap-1 ">
                                    <div>
                                        <img src={item?.images[0]} alt={item?.title} className="object-contain w-12 rounded-md" />
                                    </div>
                                    <div className="max-w-[100px] w-full">
                                        <div className="text-xs  truncate font-semibold">
                                            {item?.title}
                                        </div>
                                        <div className="text-xs">
                                            <span className="font-semibold">{item?.quantity}</span> <span className="font-italic">adet</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-semibold text-sm ">{item?.price} TL</span>
                                </div>
                            </div>
                        ))
                            :
                            <div className="p-4">Henüz bişey eklemediniz!</div>
                    }
                </div>

            </div>
            <div className="w-full rounded h-12 flex items-center justify-around  py-2  text-white px-1 bg-customBlue">
                <div>
                    <span className="pr-1"><span className="font-light">Toplam Tutar:</span> </span> {calcPrice(TOTAL)} TL
                </div>
                <Link to="/basket" className="hover:opacity-50 border p-2 rounded-md flex items-center justify-center">
                    <FiShoppingCart color="white" className="font-bold" />
                </Link>
            </div>
        </div>

    )
}
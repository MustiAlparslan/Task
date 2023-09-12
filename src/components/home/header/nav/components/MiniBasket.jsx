import { useEffect } from "react";
import { useSelector } from "react-redux"
import { calcPrice } from "../../../../../utils/consts"
import { totalMoney } from "../../../../../features/BasketSlice"

export function MiniBasket({ isHovered }) {
    const basketList = useSelector(state => state.basket.basket)
    const TOTAL = totalMoney(basketList)

    return (
        <div className="absolute w-64 z-40 drop-shadow-2xl	 shadow-lg bg-white left-[-100%] rounded ">

            <div
                className=" flex flex-col	overflow-y-auto h-[300px]   ">
                <div className="flex-grow">
                    {
                        basketList.length ? basketList.map(item => (
                            <div className="test mb-[2px] shadow   gap-1  border-b flex py-2 px-2  items-center">
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
                            :
                            <div className="p-4">Henüz bişey eklemediniz!</div>
                    }
                </div>

            </div>
            <div className="w-full h-12 flex items-center  py-2  text-white px-1 bg-customBlue">
                <span className="pr-1">Toplam Tutar: </span> {calcPrice(TOTAL)} TL
            </div>
        </div>

    )
}
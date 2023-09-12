import React, { useState,useEffect   } from "react"
import { AiOutlineHeart, AiOutlineShoppingCart } from "../../../../icons"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { totalQuantity } from "../../../../features/BasketSlice"
import { MiniBasket } from "./components/MiniBasket"


export const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);

    const basketList = useSelector((state) => state.basket.basket)
    const TOTAL_QUANTITY = totalQuantity(basketList)

    return (
        <div className="flex items-center gap-3 pr-4 md:pr-0">
            <div>
                <Link to={"/favorites"} className="hover:opacity-50 text-customBlue flex gap-1 items-center"><AiOutlineHeart size={18} />
                    <span className="md:inline hidden">Favorilerim</span>
                </Link>
            </div>

            <div className="flex items-center gap-1">
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link
                        to="/basket"
                        className="hover:opacity-50 text-customBlue flex gap-1 items-center"
                    >
                        <AiOutlineShoppingCart size={18} />
                        <span className="md:inline hidden">Sepetim</span>
                    </Link>
                    <div className={`${isHovered ? 'visible' : 'invisible'} md:block hidden`}>
                        <MiniBasket isHovered={isHovered} />
                    </div>
                </div>

                {basketList?.length !== 0 &&
                    <p className="px-2 py-1 text-white rounded-full bg-customBlue text-xs"><span>{TOTAL_QUANTITY}</span></p>
                }
            </div>


        </div>
    )
}


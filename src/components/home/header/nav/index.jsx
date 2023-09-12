import React from "react"
import { AiOutlineHeart, AiOutlineShoppingCart } from "../../../../icons"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { totalQuantity } from "../../../../features/BasketSlice"

export const NavBar = () => {
    const basketList = useSelector((state) => state.basket.basket)
    const TOTAL_QUANTITY = totalQuantity(basketList)

    return (
        <div className="flex items-center gap-3">
            <div>
                <Link to={"/favorites"} className="hover:opacity-50 text-customBlue flex gap-1 items-center"><AiOutlineHeart size={18} />
                    <span className="md:inline hidden">Favorilerim</span>
                </Link>
            </div>

            <div className="flex items-center gap-1">
                <Link to="/basket" className="hover:opacity-50 text-customBlue flex gap-1 items-center"><AiOutlineShoppingCart size={18} />
                    <span className="md:inline hidden">Sepetim</span>
                </Link>

                {basketList?.length !== 0 &&
                    <p className="px-2 py-1 text-white rounded-full bg-customBlue text-xs"><span>{TOTAL_QUANTITY}</span></p>
                }
            </div>
        </div>
    )
}


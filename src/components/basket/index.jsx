import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseProductQuantity, deleteBasket, increaseProductQuantity, totalMoney, totalQuantity } from "../../features/BasketSlice"
import { BsFillTrashFill } from "react-icons/bs"
import { calcPrice, CARCO_PRICE } from "../../utils/consts"
import { OrderSummary } from "./components/OrderSummary"


const Basket = () => {
    const basketList = useSelector(state => state.basket.basket)
    const dispatch = useDispatch()
    const TOTAL = totalMoney(basketList)
    const TOTAL_QUANTITY = totalQuantity(basketList)

    const ListBasket = () => {
        return (
            <div className="md:w-[900px]">
                {basketList?.map(item => (
                    <div className="shadow my-2 border justify-between rounded flex-1 py-2 px-1 flex-col md:flex-row flex items-center mb-2 gap-2">
                        <div className="flex md:items-center md:justify-start justify-center items-center gap-3 flex-col md:flex-row">
                            <img src={item?.images[0]} alt={item?.title} className="object-contain w-42 h-32 md:w-28 md:h-28 rounded-md" />
                            <div className="w-3/4">
                                <p className="font-bold md:truncate  text-xs md:text-md" title={item?.description}>{item?.description}</p>
                                <h2 className="text-xs md:text-sm " >{item?.title}</h2>
                            </div>
                        </div>
                        <div className="flex items-center max-w-[250px]   md:border-none gap-5 border-t md:justify-around md:pt-0 pt-1 w-full justify-center">
                            <div className="flex rounded items-center   border    gap-2  ">
                                <button onClick={() => dispatch(decreaseProductQuantity({ id: item.id }))} className="flex-1 bg-[#ccc] px-2    h-full hover:opacity-50 cursor-pointer py-1 text-center"><b>-</b></button>
                                <div className="py-1  "><b>{item?.quantity}</b></div>
                                <button disabled={item?.quantity > 10} onClick={() => dispatch(increaseProductQuantity({ id: item.id }))} className="flex-1 bg-[#ccc] px-2       h-full hover:opacity-50 cursor-pointer py-1 text-center"><b>+</b></button>
                            </div>
                            <h2 className="font-bold">{item?.quantity * item?.price} <span>TL</span></h2>
                            <button className="border rounded border-red-600 p-2" onClick={() => {
                                dispatch(deleteBasket({ id: item.id }))
                            }}>
                                <BsFillTrashFill className="text-red-600 hover:opacity-70" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div className="px-4 md:px-0">
            {basketList?.length ?
                <>
                    <div className="w-full flex gap-3 flex-col md:flex-row justify-between">
                        <div>
                            <div className="pl-2 rounded py-1 bg-blue-700 text-white shadow ">Sepetinizde ({TOTAL_QUANTITY}) ürün var!</div>
                            <ListBasket />
                        </div>
                       <OrderSummary TOTAL={TOTAL} calcPrice={calcPrice} CARCO_PRICE={CARCO_PRICE} />
                    </div>
                </>
                :
                <>
                    <h4 className="text-lg font-bold">Henüz sepete birşeyler eklemediniz</h4>
                    <hr />
                </>
            }
        </div>
    )
}
export default Basket
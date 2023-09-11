import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreaseProductQuantity, deleteBasket, increaseProductQuantity, totalMoney, totalQuantity } from "../../features/BasketSlice"
import { BsFillTrashFill } from "react-icons/bs"

const Basket = () => {
    const basketList = useSelector(state => state.basket.basket)
    const dispatch = useDispatch()
    const TOTAL = totalMoney(basketList)
    const TOTAL_QUANTITY = totalQuantity(basketList)

    const ListBasket = () => {
        return (
            <div>
                {basketList?.map(item => (
                    <div className="shadow my-2 border justify-between rounded flex-1 py-2 px-1 flex items-center mb-2 gap-2">
                        <div className="flex items-center gap-3">
                            <img src={item?.imageURL} alt={item?.productName} className="object-contain w-28 h-28 rounded-md" />
                            <div className="w-3/4 ">
                                <p className="font-bold truncate">{item?.description}</p>
                                <h2 className="text-sm " >{item?.productName}</h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex rounded items-center bg-[#ccc] w-16   gap-2  ">
                                <button onClick={() => dispatch(decreaseProductQuantity({ id: item.id }))} className="flex-1  h-full hover:opacity-50 cursor-pointer py-1 text-center"><b>-</b></button>
                                <div className="py-1"><b>{item?.quantity}</b></div>
                                <div onClick={() => dispatch(increaseProductQuantity({ id: item.id }))} className="py-1 flex-1  h-full hover:opacity-50 cursor-pointer text-center"><b>+</b></div>
                            </div>
                            <h2> {item?.quantity * item?.price} <span>TL</span></h2>
                            <button onClick={() => {
                                dispatch(deleteBasket({ id: item.id }))
                                console.log(item)
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
        <div>
            {basketList?.length ?
                <>
                    <div className="w-full flex gap-3 justify-between">
                        <div>
                            <h2 className="pl-2">Sepetinizde ({TOTAL_QUANTITY}) ürün var!</h2>
                            <ListBasket />
                        </div>
                        <div className="mt-8  h-min border rounded w-1/4 shadow px-3 py-2">
                            <h2 className="text-lg font-bold">Sipariş Özeti</h2>
                            <p>Toplam Tutar: {TOTAL} TL</p>
                            <p>Kargo Toplam: -100 TL</p>
                            <hr className="my-2" />
                            <h2 className="text-md font-semibold">Toplam {TOTAL - 100} TL</h2>
                            <button className="w-full hover:bg-white hover:text-customBlue transition ease delay-75 hover:border hover:border-customBlue py-2 rounded-lg bg-customBlue text-white font-semibold mt-1">Sepeti Onayla</button>
                        </div>
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
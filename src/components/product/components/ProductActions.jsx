import { useDispatch } from "react-redux"
import { setBasket } from "../../../features/BasketSlice"
import { deleteFavorite } from "../../../features/FavoritesSlice"
import {AiOutlineClose} from "../../../icons"
import toast from "react-hot-toast";


const ProductActions = ({data, from}) => {
  const dispatch = useDispatch()

    const AddBasket = () => {
        dispatch(setBasket(data))
        toast.success("Sepete Eklendi")
    }

    const DeleteFavorite = () => {
        dispatch(deleteFavorite(data))
    }

    return (
        <div className="w-full mt-2 flex items-center  justify-center">
              {from == "favorites" && 
              <button onClick={DeleteFavorite} 
              className="h-7  border flex items-center justify-center border-red-500 hover:opacity-50  m-1 ease-in-out delay-[25ms] transition border-customBlue rounded w-7 text-sm font-semibold"
              ><AiOutlineClose color="red"/></button> 
            }

              <button 
                onClick={AddBasket} 
                className="h-7 text-customBlue border hover:bg-customBlue hover:text-white ease-in-out delay-[25ms] transition border-customBlue rounded w-full text-sm font-semibold"
                >
                Sepete ekle 
                </button>  
            </div>  
    )
}
export default ProductActions
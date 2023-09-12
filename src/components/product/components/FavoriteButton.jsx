import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteFavorite, setFavorites } from "../../../features/FavoritesSlice"
import { AiOutlineHeart, AiFillHeart } from "../../../icons"

export const FavoriteButton = ({ data, isAbsolute = false, size = 19 }) => {
    const [isFavorite, setFavorite] = useState({ key: 0, isFav: false })
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)

    useEffect(() => {
        const favExists = favorites.some(itm => itm?.id === data?.id);
        setFavorite({ key: data?.id, isFav: favExists });
    }, [favorites, data?.id]);

    const addFavorites = (data) => {
        const newFavState = !isFavorite.isFav;
        setFavorite({ key: data?.id, isFav: newFavState });
        if (newFavState) {
            dispatch(setFavorites(data));
        } else {
            dispatch(deleteFavorite(data));
        }
    }

    return (
        <button onClick={() => addFavorites(data)} className={`${isAbsolute && 'absolute'} bg-white shadow-md  top-1 right-1 border rounded-full p-1 mb-[2px]`}>

            {favorites.some(itm => itm?.id === data?.id) ?
                <AiFillHeart size={size} color={"red"} className="hover:text-red-500 hover:text-semibold" />
                :
                <AiOutlineHeart size={size} className="hover:text-red-500 hover:text-semibold" />
            }
        </button>
    )
}

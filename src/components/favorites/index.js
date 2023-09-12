import React from "react"
import { useSelector } from "react-redux"
import Product from "../product"

const Favorites = () => {
    const _favorites = useSelector(state => state.favorites.favorites)

    return (
        <div className="w-full flex h-full items-center flex-wrap   gap-4 md:gap-2 ">
            {_favorites && _favorites.length > 0 ? (
                _favorites.map(product => (
                    <Product data={product} key={product?.id} from={"favorites"} />
                ))
            ) : (
                <>
                    <h4 className="text-lg font-bold">Favori ürün bulunmamaktadır.</h4>
                    <hr />
                </>
            )}
        </div>
    )
}
export default Favorites
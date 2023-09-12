import React from "react"
import { useSelector } from "react-redux"
import Product from "../product"

const Favorites = () => {
    const _favorites = useSelector(state => state.favorites.favorites)

    return (
        <div>
            <div className="mb-1">
                <div className="pl-2 rounded py-1 bg-blue-700 text-white shadow ">Favorileriniz</div>
            </div>
            <div className="w-full flex items-center flex-wrap   gap-3 md:gap-0 ">
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
        </div>
    )
}
export default Favorites
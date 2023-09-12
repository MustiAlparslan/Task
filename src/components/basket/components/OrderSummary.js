export const OrderSummary = ({TOTAL, CARCO_PRICE, calcPrice}) => {
    return (
        <div className="mt-10 w-full  md:max-w-lg bg-[#eee]   m-auto border rounded  mb-2 h-min	  shadow px-3 py-2">
            <h2 className="text-lg font-bold">Sipariş Özeti</h2>
            <p>Toplam Tutar: {TOTAL} TL</p>
            <div>
                <p>Kargo ücreti: {CARCO_PRICE} TL</p>
                <p className="text-xs text-red-700">75 TL ve  üzeri ücretsiz kargo</p>
            </div>
            <hr className="my-2" />
            <h2 className="text-md font-semibold">Toplam {calcPrice(TOTAL)} TL</h2>
            <button className="w-full hover:bg-white hover:text-customBlue transition ease delay-75 hover:border hover:border-customBlue py-2 rounded-lg bg-customBlue text-white font-semibold mt-1">Sepeti Onayla</button>
        </div>
    )
}
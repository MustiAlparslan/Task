export default function Footer() {
    const goAppStore = () => {
        window.open('https://apps.apple.com/tr/app/kintshop/id6449964409?l=tr', '_blank');

    }
    const goPlayStore = () => {
        window.open('https://play.google.com/store/apps/details?id=com.kintshoop.kintshoop&hl=tr&gl=US', '_blank');

    }

    const goKintShop = () => {
        window.open('https://kintshop.com/', '_blank');
    }

    return (
        <>
            <footer className="md:px-[100px] align-baseline w-full min-h-[150px] bg-customBlue  flex justify-between  px-2 py-2 md:p-6 text-white ">
                <div>
                    <h1 className="font-semibold md:text-4xl text-xl cursor-pointer hover:opacity-50	mb-1">Kintshop</h1>
                    <div className="hover:opacity-50 hover:underline font-light">Kariyer</div>
                    <div className="hover:opacity-50 hover:underline font-light">İletişim</div>
                </div>
                <div className="mt-2 md:mt-1">
                    <h2 className="font-semibold text-sm md:text-xl mb-1 	">Hakkımızda</h2>
                    <div className="hover:opacity-50 hover:underline font-light">Biz kimiz </div>
                    <div className="hover:opacity-50 hover:underline font-light">Kariyer</div>

                </div>
                <div className="mt-2 md:mt-1">
                    <h2 className="font-semibold md:text-xl	text-sm	mb-1" >Mobil Uygulamalar </h2>
                    <div>
                        <button onClick={goAppStore}>
                            <img src="https://cdn.dsmcdn.com/web/production/iosV2.svg" className="md:w-[125px] w-[90px]" />
                        </button>
                    </div>
                    <button onClick={goPlayStore}>
                        <img src="https://cdn.dsmcdn.com/web/production/googleV2.svg" className="md:w-[125px] w-[90px]" />
                    </button>
                </div>
            </footer>
            <div className="bg-black w-full text-center font-semibold  text-sm  py-2 text-white">
                <div>Copyright &copy; Kintshop | Tüm hakları saklıdır.</div>
            </div></>
    )
}
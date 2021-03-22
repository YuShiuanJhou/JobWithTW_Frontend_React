const MyNavBar = () => {
    return (
        <div className="relative bg-black border-b-2 border-grey-100">
            <div className="max-w-6xl mx-auto px-4 sm:px6">
                <div className="flex justify-between items-center py-3">
                    <div className="flex justify-start items-center ">
                        <a href="/" className="text-lg subpixel-antialiased font-billboard font-black 
                        rounded-xl text-white rounded-xl	border border-grey-50 p-2 shadow-xl mr-5	">JobWith.TW</a>
                        <a href="/"  className="text-sm subpixel-antialiased font-billboard font-black 
                         text-white  p-2 mr-5 border-b border-green-500	">工作技能排行</a>
                        <a href="/"  className="text-sm subpixel-antialiased font-billboard font-black 
                         text-white  p-2 mr-5 border-b border-green-500		">依工作技能找職缺</a>
                    </div>
                    <div >
                        <a className="" href="/">聯絡作者</a>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default MyNavBar;
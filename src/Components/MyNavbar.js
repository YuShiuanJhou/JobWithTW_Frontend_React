const MyNavBar = () => {


    const handleClick = () => {
        let element = document.getElementById("navRankList");
        if(element.classList.contains("h-0"))
        {
            element.classList.remove("h-0");
            element.classList.remove("opacity-0");
            element.classList.add("opacity-100");
        }
        else{
            element.classList.add("h-0");
            element.classList.remove("opacity-100");
            element.classList.add("opacity-0");
        }

    }

    return (
        <div className="relative bg-black border-b-2 border-grey-100">
            <div className="max-w-6xl mx-auto px-4 sm:px6">
                <div className="flex justify-between items-center py-3 
                                ">
                    <div className="flex justify-start items-center ">
                        <a href="/" className="text-lg subpixel-antialiased font-billboard font-black 
                        rounded-xl text-white rounded-xl	border border-grey-50 p-2 shadow-xl mr-5
                        hover:bg-green-500 hover:text-black  transform 
                            transition duration-300	">JobWith.TW</a>
                        <div className="hidden md:flex relative mr-5 ">
                            <a href="javascript:;" onClick={handleClick} className="text-sm subpixel-antialiased font-billboard font-black 
                         text-white  p-2  border-b border-green-500 	">台灣求職市場排行</a>
                            <div id="navRankList" className="opacity-0 h-0 inline-flex flex-col absolute top-10 origin-top-right left-0 w-full transform 
                            transition  z-50  shadow-xl	border-green-200 bg-black border transition duration-300">
                                <a href="##" className="border-b border-white text-white text-xs p-2 
                                hover:border-yellow-600 hover:text-green-200 transform  transition duration-300">
                                    職業類型
                                </a>
                                <a href="##" className="border-b border-white text-white text-xs p-2 
                                hover:border-yellow-600 hover:text-green-200 transform  transition duration-300">
                                    工程師技能
                                </a>
                                <a href="##" className="border-b border-white text-white text-xs p-2 
                                hover:border-yellow-600 hover:text-green-200 transform  transition duration-300">
                                    設計師技能
                                </a>
                                <a href="##" className="border-b border-white text-white text-xs p-2 
                                hover:border-yellow-600 hover:text-green-200 transform  transition duration-300">
                                    商業軟體技能
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:flex relative mr-5 ">
                            <a href="/" className="text-sm subpixel-antialiased font-billboard font-black 
                         text-white  p-2 border-b border-green-500		">依工作技能找職缺</a>
                        </div>


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
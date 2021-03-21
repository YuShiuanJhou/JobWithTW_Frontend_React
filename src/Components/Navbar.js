const Navbar = (props) => {
    return (
        <nav className="border border-red-600 fixed flex flex-wrap  shadow-lg bg-white  items-start px-2 py-3 w-full max-h-10">
            <div className="container w-full border border-cyan-600 px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="flex justify-around items-start ">
                    <a className="text-gray-800 bg-gray-50 bg-opacity-70	 text-lg font-sans font-bold tracking-widest leading-normal 
                    inline-block mr-4 py-2 px-4 whitespace-no-wrap rounded-xl shadow-md"
                        href="/">
                        <span className="text-white bg-cyan-800  font-black mr-1 p-1 text-xl">Job</span><span className="font-black text-green-800  m-0 p-0 text-xl">With</span>.TW            </a>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                    >
                        <i className={(props.transparent ? "text-white" : "text-gray-800") + " fas fa-bars"}></i>
                    </button>
                </div>
                <div
                    className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none block rounded shadow-lg"
                    id="example-navbar-warning"
                >
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="flex items-center">
                            <a className= "text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
                            >
                                <i className={(props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") +
                                    " far fa-file-alt text-lg leading-lg mr-2"}
                                />
                            Docs
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="flex items-center">
                            <a
                                className={
                                    (props.transparent
                                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                                        : "text-gray-800 hover:text-gray-600") +
                                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                }
                                href="#pablo"
                            >
                                <i
                                    className={
                                        (props.transparent
                                            ? "lg:text-gray-300 text-gray-500"
                                            : "text-gray-500") +
                                        " fab fa-facebook text-lg leading-lg "
                                    }
                                />
                                <span className="lg:hidden inline-block ml-2">Share</span>
                            </a>
                        </li>

                        <li className="flex items-center">
                            <a
                                className={
                                    (props.transparent
                                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                                        : "text-gray-800 hover:text-gray-600") +
                                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                }
                                href="#pablo"
                            >
                                <i
                                    className={
                                        (props.transparent
                                            ? "lg:text-gray-300 text-gray-500"
                                            : "text-gray-500") +
                                        " fab fa-twitter text-lg leading-lg "
                                    }
                                />
                                <span className="lg:hidden inline-block ml-2">Tweet</span>
                            </a>
                        </li>

                        <li className="flex items-center">
                            <a
                                className={
                                    (props.transparent
                                        ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                                        : "text-gray-800 hover:text-gray-600") +
                                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                }
                                href="#pablo"
                            >
                                <i
                                    className={
                                        (props.transparent
                                            ? "lg:text-gray-300 text-gray-500"
                                            : "text-gray-500") +
                                        " fab fa-github text-lg leading-lg "
                                    }
                                />
                                <span className="lg:hidden inline-block ml-2">Star</span>
                            </a>
                        </li>

                        <li className="flex items-center">
                            <button
                                className={
                                    (props.transparent
                                        ? "bg-white text-gray-800 active:bg-gray-100"
                                        : "bg-pink-500 text-white active:bg-pink-600") +
                                    " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                                }
                                type="button"
                                style={{ transition: "all .15s ease" }}
                            >
                                <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;
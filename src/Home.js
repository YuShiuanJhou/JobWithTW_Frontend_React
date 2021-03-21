const Home = () => {
<<<<<<< HEAD

    const handleClick = () => {
        console.log("hello")
    }

    const handleClickAgain = (name, e) => {
        console.log("hello" + name, e.target);
    }


    return (



        <div className="home">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-0">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12" src="/img/logo.png" alt="ChitChat Logo" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-10 bg-red-100">
                <div className="flex-shrink-1">
                    <img className="h-12 w-12" src="/img/logo.png" alt="ChitChat Logo" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="flex-shrink-5">
                    <img className="h-12 w-12" src="/img/logo.png" alt="ChitChat Logo" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-gray-500">You have a new message!</p>
                </div>
            </div>
            <h2 style={{ color: "#239cef", backgroundColor: "#efefef" }}>homepage</h2>
            <button onClick={handleClick} >Click me</button>
            <button onClick={(e) => { handleClickAgain('yoshi', e) }}> click me again again</button>

        </div>

    );
}

=======
    return ( 
        <div className="home">
            <h2 style={{color:"#239cef",backgroundColor:"#efefef"}}>homepage</h2>
        </div>

     );
}
 
>>>>>>> 06f3b8754ca47da94bfa9473d2fd0e28c43e65b6
export default Home;
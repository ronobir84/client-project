import { FaSearch } from "react-icons/fa";
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen  " id="banner">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="">
                    <div className="text-center">
                        <h1 className="mb-5 text-5xl font-bold text-white ml-10">Find your future home</h1>
                        <div className="mt-10 lg:flex  flex-row">
                            <div className="">
                                <select className="lg:px-20 lg:mx-0 mx-3 lg:w-full w-3/4 bg-white p-4 rounded-sm">
                                    
                                    <option>Rent</option>
                                    <option>Buy</option>
                                </select>
                            </div>
                            <div className="flex mt-4 lg:mt-0 px-[18px]   lg:px-0">
                                <div className="">
                                    <input type="text" name="name" placeholder="Enter address..." className="lg:mx-16  lg:px-10  p-4  mx-6  w-full    rounded-sm  " />
                                </div>
                                    <div>
                                        <FaSearch className="text-2xl text-gray-500 absolute mt-4 "></FaSearch>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
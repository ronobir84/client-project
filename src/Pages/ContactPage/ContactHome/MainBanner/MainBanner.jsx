
const MainBanner = () => {
    return (
        <div>
            <div className="h-[650px]  relative " id="MainBanner">
                <div className="flex rounded-md shadow-md px-24 justify-between bg-white absolute top-80 left-[130px]  h-[430px]  w-[85%] items-center ">
                    <div className="">
                        <div className="absolute top-2 pt-10">
                            <h1 className="text-4xl font-extrabold text-[#333] ">Our Offices</h1>
                        </div>
                        <div className="pt-10 ">
                            <h3 className="text-2xl font-bold text-[#333]">Los Angeles</h3>
                            <p className="text-lg text-[#333] pt-4">90 Fifth Avenue, 3rd Floor <br />
                                Los Angeles, CA 1980</p><br />
                            <a href=""><p className="text-gray-500 text-lg ">(123) 789-7390 <br />
                                office-la@resideo.com</p></a>
                        </div>
                    </div>
                    <div className="pt-12">
                        <h3 className="text-2xl font-bold text-[#333]">New York</h3>
                        <p className="text-lg text-[#333] pt-4">90 Fifth Avenue, 3rd Floor <br />
                            New York, NY 1980</p>
                        <a href=""><p className="pt-6 text-gray-500 text-lg ">(123) 789-7390 <br />
                            office-ny@resideo.com</p></a>
                    </div>
                    <div className="lg:pr-12 pt-12">
                        <h3 className="text-2xl font-bold text-[#333]">San Francisco</h3>
                        <p className="text-lg text-[#333] pt-4">90 Fifth Avenue, 3rd Floor <br />
                            San Francisco, CA 1980</p> <br />
                        <a href=""> <p className="pt-3 text-gray-500 text-lg ">(123) 789-7390 <br />
                            office-sf@resideo.com

                        </p></a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MainBanner;
import cardimg1 from "../../../assets/image/icon1.svg"
import cardimg2 from "../../../assets/image/icon2.svg"
import cardimg3 from "../../../assets/image/icon3.svg"


import cardimg4 from "../../../assets/image/icon4.svg"
const WhyChooseUs = () => {
    return (
        <div className="mb-20">
            
            <div className="hero h-[550px]   relative" id="back-img">
                    <div className="hero-content text-center">
                        <div className=" mb-16">
                            <h1 className="mb-5 text-4xl font-bold text-[#333]">Why Choose Us</h1>
                            <p className="mb-5 text-xl text-gray-500">We offer perfect real estate services</p>

                    </div>
                    



                    {/* card section */}

                    <div className=" lg:flex flex-row absolute lg:-bottom-36 lg:mx-10">


                        {/* first card */}

                        <div className="w-[365px] h-[350px] border-r-2 shadow-xl  bg-[#fff] p-4 ">
                            <div>
                                <img className="w-40 mx-auto transition ease-in-out delay-150  hover:-translate-y-4 hover:scale-125 cursor-pointer  duration-300" src={cardimg1} alt="" />
                            </div>
                            <div className="text-center ">
                                <h1 className="text-2xl text-[#333] font-bold">Find your future home</h1>
                                <p className="text-gray-500 pt-4">We help you find a new home by offering <br /> a smart real estate experience</p>
                                <button className="border-black pt-4 hover:border-b-2 text-black font-bold">Learn More</button>
                            </div>
                        </div>

                        {/* second card */}
                        <div>
                            <div className="w-[365px] h-[350px] border-r-2 shadow-xl  bg-[#fff] p-4 ">
                                <div>
                                    <img className="w-40 mx-auto transition ease-in-out delay-150  hover:-translate-y-4 hover:scale-125 cursor-pointer  duration-300" src={cardimg2} alt="" />
                                </div>
                                <div className="text-center ">
                                    <h1 className="text-2xl text-[#333] font-bold">Experienced agents</h1>
                                    <p className="text-gray-500 pt-4">Find an agent who knows <br /> your market best</p>
                                    <button className="border-black pt-4 hover:border-b-2 text-black font-bold">Learn More</button>
                                </div>
                            </div>


                        </div>

                        {/* third card */}
                        <div>
                            <div className="w-[365px] h-[350px] border-r-2 shadow-xl  bg-[#fff] p-4 ">
                                <div>
                                    <img className="w-40 mx-auto transition ease-in-out delay-150  hover:-translate-y-4 hover:scale-125 cursor-pointer  duration-300" src={cardimg3} alt="" />
                                </div>
                                <div className="text-center ">
                                    <h1 className="text-2xl text-[#333] font-bold">Buy or rent homes</h1>
                                    <p className="text-gray-500 pt-4">Millions of houses and apartments in <br /> your favourite cities</p>
                                    <button className="border-black pt-4 hover:border-b-2 text-black font-bold">Learn More</button>
                                </div>
                            </div>
                        </div>
                        {/* four card */}
                        <div>
                            <div className="w-[365px] h-[350px] shadow-xl  bg-[#fff] p-4 ">
                                <div>
                                    <img className="w-40 mx-auto transition ease-in-out delay-150  hover:-translate-y-4 hover:scale-125 cursor-pointer  duration-300" src={cardimg4} alt="" />
                                </div>
                                <div className="text-center ">
                                    <h1 className="text-2xl text-[#333] font-bold">List your own property</h1>
                                    <p className="text-gray-500 pt-4">Sign up now and sell or rent <br />your own properties</p>
                                    <button className="border-black pt-4 hover:border-b-2 text-black font-bold">Learn More</button>
                                </div>
                            </div>
                        </div>


                    </div>




                    </div>
                </div>



                
            

        </div>
        
    );
};

export default WhyChooseUs;
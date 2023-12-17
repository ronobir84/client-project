import cardImg1 from "../../../assets/image/lest-card1.svg"
import cardImg2 from "../../../assets/image/last-card2.svg"
import cardImg3 from "../../../assets/image/last-card-3.svg"
const Membership = () => {
    return (
        <div className="">
            <div className="lg:ml-0 ml-14">
                <h2 className=" text-2xl text-[#333] font-bold">SEE ALL AGENTS</h2>
            </div>
            <div className="text-center mt-20 mb-16">
                <h1 className="text-4xl text-[#333] font-bold">Membership Plans</h1>
                <h2 className="text-xl text-gray-700 font-medium mt-2">Choose the plan that suits you best</h2>
            </div>




            {/* lest card section */}


            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:m-0 m-6 ">
                
                {/* first card section */}

                <div className="lg:w-[420px] h-[560px] hover:border-4 hover:border-black rounded-md ">
                    <div className="transition ease-in-out delay-200  hover:-translate-y-9 hover:scale-100 cursor-pointer  duration-500 ">
                        <div>
                            
                            <img className="w-36 mx-auto pt-16" src={cardImg1} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-[#333] uppercase pt-10">Personal</h2>
                            <p className="text-xl text-black font-medium pt-8">10 Listings</p>
                            <p className="text-xl text-black font-medium pt-2">2 Featured Listings</p>
                            <div className="flex gap-1 justify-center pt-16">
                                <h1 className="text-5xl font-bold text-black">Free  </h1>
                                <span className="pt-6 text-gray-700">/ 1 month </span>
                            </div>
                            <button className="border-black text-sm pt-4 hover:border-b-2 text-black font-bold uppercase">Choose Plan</button>
                        </div>
                        
                    </div>
                </div>



                {/* first second section */}

                <div className="lg:w-[420px] h-[560px] hover:border-4 hover:border-black  rounded-md shadow-2xl">
                    <div className="transition ease-in-out delay-200  hover:-translate-y-9 hover:scale-100 cursor-pointer  duration-500 ">
                        <div>
                             
                                
                                <img className="w-36 mx-auto pt-16 " src={cardImg2} alt="" />
                            
                           
                        </div>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-[#333] uppercase pt-10">Professional</h2>
                            <p className="text-xl text-black  font-medium pt-8">10 Listings</p>
                            <p className="text-xl text-black  font-medium pt-2">2 Featured Listings</p>
                            <div className="flex gap-1 justify-center pt-16">
                                <span className="text-black font-bold">$</span>
                                <h1 className="text-5xl font-bold text-black">49.99  </h1>
                                <span className="pt-6 text-gray-700">/ 6 month </span>
                            </div>
                            <button className="border-black text-sm pt-4 hover:border-b-2 text-black font-bold uppercase">Choose Plan</button>
                        </div>
                        
                    </div>
                </div>


                {/* first third section */}

                <div className="lg:w-[420px] h-[560px] hover:border-4 hover:border-black rounded-md">
                    <div className="transition ease-in-out delay-200  hover:-translate-y-9 hover:scale-100 cursor-pointer  duration-500 ">
                        <div>
                            <img className="w-36 mx-auto pt-16" src={cardImg3} alt="" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-[#333] uppercase pt-10">Business</h2>
                            <p className="text-xl text-black  font-medium pt-8">10 Listings</p>
                            <p className="text-xl text-black  font-medium pt-2">2 Featured Listings</p>
                            <div className="flex gap-1 justify-center pt-16">
                                <span className="text-black font-bold">$</span>
                                <h1 className="text-5xl font-bold text-black">99.99  </h1>
                                <span className="pt-6 text-gray-700"> / 1 year </span>
                            </div>
                            <button className="border-black text-sm pt-4 hover:border-b-2 text-black font-bold uppercase">Choose Plan</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Membership;
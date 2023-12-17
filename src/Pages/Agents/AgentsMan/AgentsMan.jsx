import { FaPhoneAlt } from "react-icons/fa";
import OurAgents from "../../HomePage/OurAgents/OurAgents";

 
const AgentsMan = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16    lg:ml-0 ml-10">
                {/* first card client */}


                <div className="  overflow-hidden">
                    <div className="  w-[320px] rounded-md  bg-cover bg-center h-[405px] object-cover transition ease-linear delay-200  hover:-translate-y-1 hover:scale-105  duration-700 relative  cursor-pointer" id="first-client1" >
                    </div>
                    <div className=" relative bottom-10 bg-white w-[225px] ml-12  p-4 mx-auto rounded-md shadow-xl h-24 ">

                        <h2 className="text-2xl text-[#333] font-bold text-center">Scott Goodwin</h2>
                        <div className="flex gap-2 text-gray-500 items-center justify-center">
                            <FaPhoneAlt></FaPhoneAlt>
                            <h2 className="text-base">   (123) 456-7890</h2>
                        </div>

                    </div>
                </div>

                {/* second card client */}
                <div className="  overflow-hidden">
                    <div className="  w-[320px] rounded-md  bg-cover bg-center h-[405px] object-cover transition ease-linear delay-200  hover:-translate-y-1 hover:scale-105  duration-700 relative  cursor-pointer" id="first-client2" >
                    </div>
                    <div className=" relative bottom-10 bg-white w-[225px]  ml-12  p-4 mx-auto rounded-md shadow-xl h-24 ">

                        <h2 className="text-2xl text-[#333] font-bold text-center">Alayna Becker</h2>
                        <div className="flex gap-2 text-gray-500 items-center justify-center">
                            <FaPhoneAlt></FaPhoneAlt>
                            <h2 className="text-base">  (456) 123-7890</h2>
                        </div>

                    </div>
                </div>



                {/*   third card client */}
                <div className="  overflow-hidden">
                    <div className="  w-[320px] rounded-md  bg-cover bg-center h-[405px] object-cover transition ease-linear delay-200  hover:-translate-y-1 hover:scale-105  duration-700 relative  cursor-pointer" id="first-client3" >
                    </div>
                    <div className=" relative bottom-10  bg-white w-[225px] ml-12   p-4 mx-auto rounded-md shadow-xl h-24 ">

                        <h2 className="text-2xl text-[#333] font-bold text-center">Melvin Blackwell</h2>
                        <div className="flex gap-2 text-gray-500 items-center justify-center">
                            <FaPhoneAlt></FaPhoneAlt>
                            <h2 className="text-base"> (789) 123-4560</h2>
                        </div>

                    </div>
                </div>




                {/*   four card client */}

                <div className="  overflow-hidden">
                    <div className="  w-[320px] rounded-md  bg-cover bg-center h-[405px] object-cover transition ease-linear delay-200  hover:-translate-y-1 hover:scale-105  duration-700 relative  cursor-pointer" id="first-client4" >
                    </div>
                    <div className=" relative bottom-10 bg-white w-[225px] ml-12  p-4 mx-auto rounded-md shadow-xl h-24 ">

                        <h2 className="text-2xl text-[#333] font-bold text-center">Erika Tillman</h2>
                        <div className="flex gap-2 text-gray-500 items-center justify-center">
                            <FaPhoneAlt></FaPhoneAlt>
                            <h2 className="text-base"> (890) 456-1237</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentsMan;
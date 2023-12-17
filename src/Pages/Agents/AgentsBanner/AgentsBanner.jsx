
const AgentsBanner = () => {
    return (
        <div className="mt-16">
            <div className="hero object-cover lg:h-[650px] h-[100vh] " id="AgentsBanner">
                
                <div className=" bg-white w-5/6 lg:h-2/5 h-[500px] rounded-md shadow-md absolute lg:mt-[550px] mt-[398px]">
                    <h2 className="lg:text-5xl text-3xl text-black lg:text-[#333] font-bold absolute pl-20 pt-16">Find an Agent</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3  lg:pl-20 pt-40 lg:mx-0 mx-4 lg:px-0 px-3">
                        <div>
                            <p className="text-black font-bold">Location</p>
                            <input className="border bg-white lg:w-3/4 w-full h-12 px-4 rounded" placeholder="Neighborhood/City/Zip" type="text" />
                        </div>
                        <div>
                            <p className="text-black font-bold">Name</p>
                            <input className="border bg-white lg:w-5/6 w-full h-12 px-4 rounded" placeholder="Agent name" type="text" />
                        </div>
                        <div className="">
                            <p className="text-black font-bold">Service Needed</p>
                            <select className=" select  bg-white rounded    border-gray-300  h-12 hover:border-black     lg:w-5/6  w-full">
                                <option className="text-lg">What is this regarding?</option>
                                <option className="text-lg">Customer support / feedback</option>
                                <option className="text-lg">Applying</option>
                                <option className="text-lg">Press</option>
                                <option className="text-lg">Listings</option>
                                <option className="text-lg">Partnerships</option>
                                <option className="text-lg">General questions</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentsBanner;
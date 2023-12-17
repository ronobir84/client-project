// import img from "../../../../assets/image/Card-image-6.jpg" 

const MessageOurLocations = () => {
    return (
        <div className="">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-0 px-8  gap-10">
                {/* form section */}
                <div>
                    <div>
                        <h2 className="lg:text-5xl text-4xl text-[#333] font-bold">Send Us A Message</h2>
                        <div className="lg:flex  gap-8 mt-6 lg:space-y-0 space-y-4">
                            <input type="text" placeholder="Name" className="lg:w-[50%] w-full bg-white text-lg px-4 rounded-md ho  h-14 border border-gray-300" />
                            <input type="email" placeholder="Email" className="lg:w-[50%] w-full bg-white px-4 text-lg rounded-md ho  h-14 border border-gray-300" required />
                        </div>
                    </div>
                    <div className="mt-6 lg:flex flex-row gap-7 lg:space-y-0 space-y-4">
                        <select className=" select bg-white    border-gray-300 rounded-md h-14  hover:border-black     lg:w-[70%]  w-full">
                            <option   className="text-lg">What is this regarding?</option>
                            <option className="text-lg">Customer support / feedback</option>
                            <option className="text-lg">Applying</option>
                            <option className="text-lg">Press</option>
                            <option className="text-lg">Listings</option>
                            <option className="text-lg">Partnerships</option>
                            <option className="text-lg">General questions</option>
                        </select>
                        <input type="text" placeholder="Phone (optional)" className="lg:w-[70%] w-full bg-white px-4 rounded-md ho  h-14 border border-gray-300" />
                    </div>
                    <div className="mt-6">
                        <textarea className="w-[100%] h-44 border bg-white rounded-md p-4 text-lg" name="" placeholder="Massage" id="" cols="20" rows="10"></textarea>
                    </div>
                    <div className="mt-6">
                        <button className="px-8 py-4 bg-[#333] text-white text-lg rounded-md hover:text-gray-500 uppercase font-bold">Send Message</button>
                    </div>
                </div>

                {/* mt-[78px] */}
                {/* MessageOurLocations section */}
                <div className="">
                    <div className="flex justify-between">
                        <h1 className="lg:text-5xl text-2xl text-[#333] font-bold">Our Locations</h1>
                        <select className="select border-gray-300 rounded-md  bg-white  hover:border-black lg:w-48">
                             
                            <option className="text-lg">Los Angeles</option>
                            <option className="text-lg">New York</option>
                            <option className="text-lg">San Francisco</option>
                             
                        </select>
                    </div>
                    <div className="mt-7">
                        <iframe className="w-full h-[330px] rounded-md" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=570&amp;height=300&amp;hl=en&amp;q=90%20Fifth%20Avenue,%203rd%20Floor%20San%20Francisco,%20CA%201980+(San%20Francisco)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
                     </div>
                </div>
                 
            </div>
        </div>
    );
};

export default MessageOurLocations;
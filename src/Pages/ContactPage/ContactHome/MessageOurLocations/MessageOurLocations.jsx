
const MessageOurLocations = () => {
    return (
        <div>
            <div>
                {/* form section */}
                <div>
                    <h2 className="text-5xl text-[#333] font-bold">Send Us A Message</h2>
                    <div className="flex gap-8 mt-6">
                        <input type="text" placeholder="Name" className="w-[22%] text-lg px-4 rounded-md ho  h-14 border border-gray-300" />
                        <input type="email" placeholder="Email" className="w-[22%] px-4 text-lg rounded-md ho  h-14 border border-gray-300" required />
                    </div>
                </div>
                <div className="mt-6 flex gap-8 ">
                    <select className=" select    border-gray-300 rounded-md h-14 hover:border-black     w-full max-w-xs">
                        <option disabled selected  className="text-lg">What is this regarding?</option>
                        <option  className="text-lg">Customer support / feedback</option>
                        <option  className="text-lg">Applying</option>
                        <option  className="text-lg">Press</option>
                        <option  className="text-lg">Listings</option>
                        <option  className="text-lg">Partnerships</option>
                        <option  className="text-lg">General questions</option>
                    </select>
                    <input type="text" placeholder="Phone (optional)" className="w-[22%] px-4 rounded-md ho  h-14 border border-gray-300" />
                </div>
                <div className="mt-6">
                    <textarea className="w-[46%] h-44 border rounded-md p-4 text-lg"  name="" placeholder="Massage" id="" cols="20" rows="10"></textarea>
                </div>
                <div className="mt-6">
                    <button className="px-8 py-4 bg-[#333] text-white text-lg rounded-md hover:text-gray-500 uppercase font-bold">Send Message</button>
                </div>






                {/* MessageOurLocations section */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default MessageOurLocations;
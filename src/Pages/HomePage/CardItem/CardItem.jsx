
const CardItem = ({ card }) => {
    const { id, name, image, text } = card;
    return (
        <div  className="lg:w-[460px]  lg:h-[400px]  rounded-xl shadow-md transition lg:p-0 lg:mx-0 mx-6 ease-in-out delay-150  lg:hover:-translate-y-1 lg:hover:scale-105 cursor-pointer  duration-300">
            <div className="overflow-hidden">
                <img className="rounded" src={image} alt="" />
            </div>
            <div className="bg-white lg:ml-6 mt-3 flex justify-between ">
                <div className=" lg:p-0 p-3 ">
                    <h2 className="text-2xl text-[#333] font-extrabold">{name}</h2>
                    <h3 className="text-lg text-gray-700 font-medium mt-1">{text}</h3>
                </div>
                <div className=" mt-5 mr-6">
                    <button className="border-black  hover:border-b-2 text-black font-bold uppercase">Explore</button>
                </div>
                
            </div>
            
            
        </div>
    );
};

export default CardItem;
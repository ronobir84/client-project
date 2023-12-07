
const CardItem = ({ card }) => {
    const { id, name, image, text } = card;
    return (
        <div className="w-[460px] h-[400px]  rounded-xl shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 cursor-pointer  duration-300">
            <div>
                <img className="" src={image} alt="" />
            </div>
            <div className="bg-white ml-6 mt-3 flex justify-between">
                <div>
                    <h2 className="text-2xl text-[#333] font-extrabold">{name}</h2>
                    <h3 className="text-lg text-gray-500 font-medium mt-1">{text}</h3>
                </div>
                <div className=" mt-5 mr-6">
                    <button className="border-black  hover:border-b-2 text-black font-bold">Explore</button>
                </div>
                
            </div>
            
            
        </div>
    );
};

export default CardItem;
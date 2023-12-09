
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
    const navLinks = <>
        <li><Link className="text-lg text-black  font-semibold">Home</Link></li>
        <li><Link className="text-lg text-black  font-semibold">Dashboard</Link></li>
        <li><Link className="text-lg  text-black font-semibold">Apartment</Link></li>
        <li><Link className="text-lg  text-black font-semibold">Contact</Link></li>
    
    </>
    return (
        <div>
            <div className="navbar  w-full  fixed z-10   bg-white">
                <div className="w-1/2 justify-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden ">
                            <button className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10  stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* mn */}
                    <div className="lg:ml-28 ml-[82px]">
                        <Link to="/"><h1 className="text-3xl font-bold uppercase text-black">resideo</h1></Link>
                    </div>
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-12 ml-4">
                         {navLinks}
                    </ul>
                </div>
                <div className="navbar-end  lg:mr-28 ">
                    <FaUserAlt className= " border-2 hover:bg-[#444444] hover:text-white text-black text-6xl p-2 rounded-full"></FaUserAlt>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
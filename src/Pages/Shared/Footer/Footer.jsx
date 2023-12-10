import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer2 from "./Footer2";
const Footer = () => {
    return (
        <div>
            <div className="mt-28 hidden lg:block">
                <footer className="footer h-[450px] p-10 bg-gray-100 ">
                    <nav className="pl-16 pt-10">
                        <h1 className="text-4xl font-bold text-[#333] ">resideo.</h1>
                        <p className="text-xl text-black pt-3 ">90 Fifth Avenue, 3rd Floor <br />
                            San Francisco, CA 1980 <br />
                            (123) 456-7890</p>
                        <div className="flex gap-6 pt-3 text-black">
                            <a href=""><FaInstagram className="text-4xl  "></FaInstagram></a>
                            <a href=""><FaFacebook className="text-4xl"></FaFacebook></a>
                            <a href=""><FaTwitter className="text-4xl"></FaTwitter></a>
                        </div>
                        <h3 className=" text-lg text-black pt-10">Terms & Conditions and Privacy Policy</h3>
                        <p className="text-base text-black">© Resideo. All Rights Reserved. 2021</p>

                    </nav>
                    <nav className=" pt-8">
                        <h1 className="text-2xl font-bold text-[#333] ">Company</h1>

                        <a href="" className="text-xl text-black pt-3 hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">About Us</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Agents</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Blog</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Demos</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Contact Us</a>


                    </nav>
                    <nav>
                        <h1 className="text-2xl font-bold text-[#333] pt-6">Actions</h1>
                        <a href="" className="text-xl text-black pt-3 hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Buy Properties</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Rent Properties</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Sell Properties</a>


                    </nav>
                    <nav>
                        <h1 className="text-2xl font-bold text-[#333] pt-6">Explore</h1>

                        <a href="" className="text-xl text-black pt-3 hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Homes for Rent</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Apartments for Rent</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Homes for Sale</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">Apartments for Sale</a>
                        <a href="" className="text-xl text-black hover:translate-x-1 hover:scale-100 hover:border-b-2 hover:border-black ">CRM</a>

                    </nav>
                </footer>
            </div>


            <div>
                <Footer2></Footer2>
            </div>
        </div>
    );
};

export default Footer;
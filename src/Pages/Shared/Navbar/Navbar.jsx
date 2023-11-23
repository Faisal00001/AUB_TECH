import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.jpg";
const Navbar = () => {
    const showBar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }
    const hideSideBar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }
    return (
        <div>
            <nav className="absolute z-10 w-full">
                <div className="flex justify-between   items-center">
                    <div className="pl-16 pb-5 mt-[50px] flex items-center">
                        <div className="avatar">
                            <div className="w-14 rounded-full">

                                <img src={logo} />
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl pl-3 text-white font-semibold">AUB TECH</h3>
                    </div>
                    <div className="pb-5 mt-[50px]">
                        <ul className="sidebar hidden backdrop-blur-sm bg-white/30 fixed  top-0 right-0 min-h-screen z-50  shadow-xl flex-col  items-start justify-start w-full md:w-[400px] ">
                            <li className="w-full py-5 hover:bg-red-500">
                                <div className="flex justify-end pr-5">
                                    <div>
                                        <IoMdClose onClick={hideSideBar} className="ml-5 text-3xl cursor-pointer" />
                                    </div>
                                </div>
                            </li>
                            <li className="w-full py-5 hover:bg-red-500">
                                <Link className="pl-5 ">
                                    Home
                                </Link>
                            </li>
                            <li className="w-full  hover:bg-red-500">
                                <Link className="pl-5">
                                    Service
                                </Link>
                            </li>
                            <li className="w-full  hover:bg-red-500">
                                <Link className="pl-5">
                                    About
                                </Link>
                            </li>
                            <li className="w-full  hover:bg-red-500">
                                <Link className="pl-5">
                                    Contact
                                </Link>
                            </li>
                            <li className="w-full hover:bg-red-500">
                                <Link className="pl-5">
                                    Buy Now
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex items-center space-x-12 pr-16">
                            <li className="hidden lg:block">
                                <Link className="text-skin-navLinkText font-medium hover:text-skin-navLinkTextHover">
                                    Home
                                </Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link className="text-skin-navLinkText font-medium hover:text-skin-navLinkTextHover">
                                    Service
                                </Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link className="text-skin-navLinkText font-medium hover:text-skin-navLinkTextHover">
                                    About
                                </Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link className="text-skin-navLinkText font-medium hover:text-skin-navLinkTextHover">
                                    Contact
                                </Link>
                            </li>
                            <li className="hidden md:block">
                                {/* #f9004d */}
                                <Link className="text-skin-navLinkText font-medium border-solid border-2 border-slate-200 rounded-lg py-3 px-5 hover:bg-skin-navButtonHover hover:border-[#f9004d]">
                                    Buy Now
                                </Link>
                            </li>
                            <li>
                                <FiMenu onClick={showBar} className="text-3xl block lg:hidden cursor-pointer text-skin-navLinkText font-medium " />
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </div>
    );
};

export default Navbar;
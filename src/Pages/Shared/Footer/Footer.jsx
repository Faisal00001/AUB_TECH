
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import contactUs from "../../../assets/images/ContactUsBanner/contactUsBanner.jpg";
import footerBannerImg from "../../../assets/images/HomeBanner/HomeBanner.jpg";
const Footer = () => {
    const navigate = useNavigate()
    const handleContact = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        navigate('/contactUs')
    }
    return (
        <div>
            <div className="mt-56">
                {/* Contact Us */}
                <div className="block lg:hidden">
                    <div>
                        <div className="hero" style={{ backgroundImage: `url(${contactUs})` }}>
                            <div className="w-full">
                                <div>
                                    <div className="py-14 ">
                                        <div className="pl-8 md:pl-16">
                                            <p className="text-skin-textWhite text-sm md:text-lg lg:text-xl mb-5 pl-1">READY TO DO THIS</p>
                                            <h3 className="text-5xl md:text-6xl lg:text-8xl font-bold text-skin-textWhite">Lets get <br />to work</h3>
                                            <button className="transition mt-7 md:mt-10 ease-in-out delay-150 hover:-translate-y-1  duration-300 text-skin-navLinkText hover:text-skin-footerButtonText font-medium border-solid border-2 border-slate-200 rounded-lg py-2 md:py-3 md:px-8 px-4 lg:px-12 text-lg  lg:text-xl hover:bg-white hover:border-[#FFFFFF]">
                                                Contact Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero  lg:h-[470px] relative" style={{ backgroundImage: `url(${footerBannerImg})` }}>
                    <div className="py-16 lg:py-0 w-full">
                        <div className="">
                            <div className="flex">
                                {/* Contact us */}
                                <div className="w-[51%] hidden lg:block -mt-[90px] ">
                                    <div className="hero rounded-tr-md h-[560px]" style={{ backgroundImage: `url(${contactUs})` }}>
                                        <div className="w-full pb-20 rounded-tr-md">
                                            <div className="container mx-auto">
                                                <div className="pl-28 pt-28">
                                                    <p className="text-skin-textWhite text-xl mb-5 pl-1">READY TO DO THIS</p>
                                                    <h3 className="text-8xl font-bold text-skin-textWhite">Lets get <br />to work</h3>
                                                    <button onClick={handleContact} className="transition mt-10 ease-in-out delay-150 hover:-translate-y-1  duration-300 text-skin-navLinkText hover:text-skin-footerButtonText font-medium border-solid border-2 border-slate-200 rounded-lg py-3 px-12 text-xl hover:bg-white hover:border-[#FFFFFF] customCursor">
                                                        Contact Us
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-[49%]">
                                    <div className="flex flex-col md:flex-row pl-8 md:pl-16 lg:pl-28  lg:pt-36 md:gap-80 lg:gap-40">
                                        <div>
                                            <h3 className="text-skin-footerText text-xl font-medium">Quick Link</h3>
                                            <div className="mt-4 md:mt-7 space-y-4">
                                                <p className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">Work</p>
                                                <p className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">About</p>
                                                <p className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">Lets Talk</p>

                                            </div>
                                        </div>
                                        <div className="mt-10 md:mt-0">
                                            <h3 className="text-skin-footerText text-xl font-medium">Say Hello</h3>
                                            <div className="mt-4 md:mt-7 space-y-4">
                                                <p className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">admin@example.com</p>
                                                <p className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">hr@example.com</p>
                                                <div className="flex gap-6 ">
                                                    <div><FaFacebookF className="text-skin-footerText text-lg customCursor transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-skin-footerButtonText duration-300"></FaFacebookF></div>
                                                    <div>
                                                        <FaLinkedinIn className="text-skin-footerText text-lg customCursor transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-skin-footerButtonText duration-300"></FaLinkedinIn>
                                                    </div>
                                                    <div>
                                                        <FaInstagram className="text-skin-footerText text-lg customCursor transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-skin-footerButtonText duration-300"></FaInstagram>
                                                    </div>
                                                    <div>
                                                        <FaTwitter className="text-skin-footerText text-lg customCursor transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-skin-footerButtonText duration-300"></FaTwitter>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-skin-footerText font-medium text-sm mt-12 text-center">Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                {/* <div className="left-[3%] top-[90%] absolute hidden lg:block">
                    <img className="w-[60%] h-[600px] rounded-lg" src={mountain} alt="Mountain" />
                </div> */}
            </div>
        </div>
    );
};

export default Footer;

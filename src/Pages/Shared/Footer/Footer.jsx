
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import contactUs from "../../../assets/images/ContactUsBanner/contactUsBanner.jpg";
import footerBannerImg from "../../../assets/images/HomeBanner/HomeBanner.jpg";
const Footer = () => {
    const navigate = useNavigate()
    const handlePath = (path) => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        navigate(`/${path}`)
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
                                                    <p className="text-skin-textWhite text-xl mb-5 pl-1">Prepared to avail yourself of our top-tier offerings?</p>
                                                    <h3 className="text-5xl font-bold text-skin-textWhite">Lets us <br />guide you to place your first order</h3>
                                                    <button onClick={() => handlePath('contactUs')} className="transition mt-10 ease-in-out delay-150 hover:-translate-y-1  duration-300 text-skin-navLinkText hover:text-skin-footerButtonText font-medium border-solid border-2 border-slate-200 rounded-lg py-3 px-12 text-xl hover:bg-white hover:border-[#FFFFFF] customCursor">
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
                                                <p onClick={() => handlePath("service")} className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">Services</p>
                                                <p onClick={() => handlePath('aboutUs')} className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">
                                                    About
                                                </p>
                                                <p className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">Lets Talk</p>

                                            </div>
                                        </div>
                                        <div className="mt-10 md:mt-0">
                                            <h3 className="text-skin-footerText text-xl font-medium">Say Hello</h3>
                                            <div className="mt-4 md:mt-7 space-y-4">
                                                <p className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">aubtechgroup@gmail.com</p>
                                                <p className="text-skin-footerText hover:text-skin-footerButtonText customCursor font-medium">info.aubtech@gmail.com</p>
                                                <div className="flex gap-6 ">
                                                    <div> <a target="_blank" href="https://www.facebook.com/theaubtech" rel="noreferrer"><FaFacebookF className="text-skin-footerText text-lg customCursor transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-skin-footerButtonText duration-300"></FaFacebookF></a></div>
                                                    <div>
                                                        <a target="_blank" href="https://www.linkedin.com/company/aubtechgroup" rel="noreferrer"> <FaLinkedinIn className="text-skin-footerText text-lg customCursor transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-skin-footerButtonText duration-300"></FaLinkedinIn></a>
                                                    </div>
                                                    <div>
                                                        <a target="_blank" href="https://www.instagram.com/aubtechgroup" rel="noreferrer"><FaInstagram className="text-skin-footerText text-lg customCursor transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-skin-footerButtonText duration-300"></FaInstagram></a>
                                                    </div>
                                                    <div>
                                                        <a target="_blank" href="https://twitter.com/AubTech27285?t=MBq_S752227a71XtqX8QxQ&s=07" rel="noreferrer"><FaTwitter className="text-skin-footerText text-lg customCursor transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-skin-footerButtonText duration-300"></FaTwitter></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-skin-footerText font-medium text-sm mt-12 text-center">Copyright © 2023 AubTech. All Rights Reserved.</p>
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

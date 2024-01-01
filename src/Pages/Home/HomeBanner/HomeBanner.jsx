
import { Link } from "react-router-dom";
import HomeBannerImg from "../../../assets/images/HomeBanner/HomeBanner.jpg";
const HomeBanner = () => {
    return (
        <div>
            <div>
                {/* <img src="" alt="" /> */}
                <div className="hero min-h-screen " style={{ backgroundImage: `url(${HomeBannerImg})` }}>
                    <div>
                        <div className="container mx-auto mb-[170px]">
                            <div className="pt-[230px] pl-[50px]">
                                <h1 className="bg-gradient-to-r from-skin-BannerTitleStart to-skin-BannerTitleEnd text-transparent bg-clip-text mb-5 text-4xl  lg:text-6xl font-bold text-center pb-5 pr-5 ">Crafting Digital Futures  <br />with Code and Creativity</h1>
                                <div className="flex justify-center">
                                    <Link to={'/contactUs'} className="translation customCursor ease-in-out delay-150 duration-300  text-skin-navLinkText font-medium border-solid border-2 border-slate-200 rounded-lg py-3 px-7 hover:bg-skin-navButtonHover hover:border-[#f9004d]">
                                        Hire Us
                                    </Link>
                                </div>

                            </div>
                            {/* <div className="pl-[50px] mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pr-5">
                                <div>
                                    <BiBriefcase className="text-skin-bannerIcon text-7xl mb-5"></BiBriefcase>
                                    <h3 className="text-skin-navLinkText text-xl md:text-2xl mb-5">Business Stratagy</h3>
                                    <p className="text-skin-navSubHeading  text-lg md:text-xl ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                                <div>
                                    <IoCubeOutline className="text-skin-bannerIcon text-7xl mb-5"></IoCubeOutline>
                                    <h3 className="text-skin-navLinkText text-xl md:text-2xl mb-5">Website Development</h3>
                                    <p className="text-skin-navSubHeading  text-lg md:text-xl">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                                    </p>
                                </div>
                                <div>
                                    <LuMouse className="text-skin-bannerIcon text-7xl mb-5"></LuMouse>
                                    <h3 className="text-skin-navLinkText text-xl md:text-2xl mb-5">Marketing & Reporting</h3>
                                    <p className="text-skin-navSubHeading text-lg md:text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                            </div> */}
                        </div>

                    </div>
                    <div>



                    </div>

                </div>

            </div>


        </div>
    );
};

export default HomeBanner;
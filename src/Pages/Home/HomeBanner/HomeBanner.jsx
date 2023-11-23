
import { BiBriefcase } from "react-icons/bi";
import { IoCubeOutline } from "react-icons/io5";
import { LuMouse } from "react-icons/lu";
import mountain from "../../../assets/images/navImages/mountain.jpg";
const HomeBanner = () => {
    return (
        <div>
            <div className="relative">
                <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/LrdLDmj/abstract-triangles-background.jpgg)' }}>
                    <div className="hero-overlay bg-opacity-40 pb-[170px]">
                        <div className="pt-[230px] pl-[50px]">
                            <h1 className="bg-gradient-to-r from-skin-BannerTitleStart to-skin-BannerTitleEnd text-transparent bg-clip-text mb-5 text-4xl md:text-6xl lg:text-8xl font-bold">A DIGITAL <br />
                                AGENCY.</h1>
                        </div>
                        <div className="pl-[50px] mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pr-5">
                            <div>
                                <BiBriefcase className="text-skin-bannerIcon text-7xl"></BiBriefcase>
                                <h3 className="text-skin-navLinkText text-xl md:text-2xl">Business Stratagy</h3>
                                <p className="text-skin-subHeading text-lg md:text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                            <div>
                                <IoCubeOutline className="text-skin-bannerIcon text-7xl"></IoCubeOutline>
                                <h3 className="text-skin-navLinkText text-xl md:text-2xl">Website Development</h3>
                                <p className="text-skin-subHeading text-lg md:text-xl">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                                </p>
                            </div>
                            <div>
                                <LuMouse className="text-skin-bannerIcon text-7xl"></LuMouse>
                                <h3 className="text-skin-navLinkText text-xl md:text-2xl">Marketing & Reporting</h3>
                                <p className="text-skin-subHeading text-lg md:text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                        </div>

                    </div>
                    <div>



                    </div>

                </div>
                <div className="left-[3%] top-[90%] absolute">
                    <img className="w-[60%] h-[600px] rounded-lg" src={mountain} alt="" />
                </div>
            </div>


        </div>
    );
};

export default HomeBanner;
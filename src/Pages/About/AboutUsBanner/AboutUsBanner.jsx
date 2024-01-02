import Particle from "../../../components/Particle/Particle";
import "./AboutUsBanner.css";
const AboutUsBanner = () => {
    return (
        <div>
            <div>
                <div className="hero bg-black">
                    <Particle></Particle>
                    <div>
                        <div className="container mx-auto">
                            <div>
                                <div className="pt-[230px] pb-[133px]">
                                    <h3 className="bannerTitleColor text-center   text-5xl font-bold mb-5">About</h3>
                                    <p className="text-center text-skin-textWhite">Home <span className="text-skin-navLinkText">/</span> <span className="bannerTitleColor">About</span></p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default AboutUsBanner;
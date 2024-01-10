import Particle from "../../../components/Particle/Particle";
import "./ServiceBanner.css";
const ServiceBanner = () => {
    return (
        <div>
            <div>
                {/* style={{ backgroundImage: `url(${HomeBannerImg})` }} */}
                <div className="hero bg-black" >
                    <Particle viewPort={'h-[450px]'}></Particle>
                    <div>
                        <div className="container mx-auto">
                            <div>
                                <div className="pt-[230px] pb-[133px]">
                                    <h3 className="bannerTitleColor text-center   text-5xl font-bold mb-5">Service</h3>
                                    <p className="text-center text-skin-textWhite">Home <span className="text-skin-navLinkText">/</span> <span className="bannerTitleColor">Service</span></p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default ServiceBanner;
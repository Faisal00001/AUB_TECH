import HomeBannerImg from "../../../assets/images/HomeBanner/HomeBanner.jpg";
import "./ServiceBanner.css";
const ServiceBanner = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-[50vh]" style={{ backgroundImage: `url(${HomeBannerImg})` }}>
                    <div className="hero-overlay bg-opacity-40">
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
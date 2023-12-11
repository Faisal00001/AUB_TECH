
import ServiceDetails from "../../../assets/images/ServiceDetails/serviceDetailsBanner.jpg";
const ServiceDetailsBanner = () => {
    return (
        <div>
            <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(${ServiceDetails})` }}>
                <div className="hero-overlay bg-opacity-70">
                    <div className="container mx-auto">
                        <div>
                            <div className="pt-[230px] pb-[133px]">
                                <h3 className="bannerTitleColor text-center text-4xl md:text-6xl font-bold mb-5">WEBSITE DEVELOPMENT</h3>
                                <p className="text-center text-skin-navLinkText px-5 md:text-xl">Fresh From The Press Description</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default ServiceDetailsBanner;
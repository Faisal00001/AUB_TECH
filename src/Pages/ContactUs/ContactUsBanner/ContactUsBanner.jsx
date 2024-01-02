import Particle from "../../../components/Particle/Particle";
// import "./ContactUsBanner.css";
const ContactUsBanner = () => {
    return (
        <div>
            <div>
                <div className="hero bg-black">
                    <Particle></Particle>
                    <div className="container mx-auto">
                        <div>

                            <div className="pt-[230px] pb-[133px]">
                                <h3 className="bannerTitleColor text-center text-4xl md:text-6xl font-bold mb-5">Contact With Us</h3>

                                {/* <p className="text-center text-skin-navLinkText px-5 md:text-xl">Contrary to popular belief, Lorem Ipsum is not simply random text.</p> */}
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default ContactUsBanner;
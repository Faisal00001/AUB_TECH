import Lottie from "lottie-react";
import AubTechAbout from "../../assets/images/About/AubTechAbout.json";

const AboutUs = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-5 my-24">
                <div className="w-full lg:w-[45%]">
                    {/* <img src={AubTechAbout} className="h-[550px] object-cover lg:h-[600px] mx-auto  w-[80%] rounded-lg" alt="Mountain" /> */}
                    <Lottie animationData={AubTechAbout} loop={true} />
                </div>
                <div className="w-[80%] lg:w-[55%]">
                    <div className="space-y-5 md:pr-10 mt-16 lg:mt-0">
                        <h3 className="text-skin-Heading font-bold text-4xl md:text-6xl">About</h3>
                        <p className="text-skin-subHeading leading-7 ">Welcome to AubTech, your catalyst for digital innovation. As a leading software company, we specialize in crafting tailored solutions that redefine the digital landscape. Our dynamic team, fueled by a passion for innovation, delivers high-quality software to propel businesses forward. At AubTech, we embrace integrity, innovation, and excellence, ensuring our clients stay ahead in a rapidly evolving technological landscape. Partner with AubTech for cutting-edge solutions designed to elevate your digital experience. Welcome to a world where innovation meets impact – welcome to AubTech.</p>
                    </div>
                    {/* <div className="flex flex-col md:flex-row gap-5 mt-10 ">
                        <div className="space-y-5">
                            <h3 className="text-skin-Heading text-2xl md:text-3xl font-medium">Who we are</h3>
                            <p className="text-skin-subHeading leading-7 ">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div className="space-y-5">
                            <h3 className="text-skin-Heading text-2xl md:text-3xl font-medium">Who we are</h3>
                            <p className="text-skin-subHeading leading-7 ">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default AboutUs;
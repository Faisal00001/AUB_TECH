import { FaBusinessTime } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { MdMiscellaneousServices } from "react-icons/md";
import { SiGamedeveloper } from "react-icons/si";
import { TbUserBolt } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./Services.css";
const Services = () => {

    return (
        <div>
            <div className="bg-skin-fillServicesBg py-20">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-5 pl-10 pr-5">
                        <div className="w-full pt-8 lg:w-[33%] space-y-7 pb-8 lg:pb-0">
                            <h3 className="text-4xl md:text-6xl text-skin-Heading font-bold">Services</h3>
                            <p className="text-skin-subHeading leading-7 ">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                            </p>
                            <li className="list-none">
                                <Link className="link link-underline no-underline link-underline-black text-skin-Heading hover:text-skin-linkHover customCursor"> Request Custom Service </Link>
                            </li>
                        </div>
                        <div className="w-full lg:w-[67%] gap-2 grid grid-cols-1 md:grid-cols-2">
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 customCursor">
                                <FaBusinessTime className="text-skin-linkHover text-6xl group-hover:text-white"></FaBusinessTime>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Project Development</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Craft tailored solutions with AubTech's project development expertise. Our dynamic team ensures seamless execution, delivering success for your unique vision.</p>
                            </div>
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 customCursor">
                                <SiGamedeveloper className="text-skin-linkHover text-6xl group-hover:text-white"></SiGamedeveloper>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Offshore Development</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Optimize costs and amplify efficiency with AubTech's offshore development services. Our global team ensures top-notch solutions, fostering success in the digital landscap.</p>
                            </div>
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 customCursor">
                                <TbUserBolt className="text-skin-linkHover text-6xl group-hover:text-white"></TbUserBolt>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Maintenance & IT Support</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Experience uninterrupted performance with AubTech's software maintenance and IT support. Our dedicated team ensures the reliability and efficiency of your software systems.</p>
                            </div>
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 customCursor">
                                <MdMiscellaneousServices className="text-skin-linkHover text-6xl group-hover:text-white"></MdMiscellaneousServices>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">MVP Service</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Validate your ideas swiftly with AubTech's MVP services. Our agile approach brings your Minimum Viable Product to market quickly, minimizing risks and maximizing impact.</p>
                            </div>
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 customCursor">
                                <GrSystem className="text-skin-linkHover text-6xl group-hover:text-white"></GrSystem>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Scalable System Design</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Future-proof your infrastructure with AubTech's scalable system design. Our solutions evolve with your business, ensuring flexibility and efficiency in an ever-changing digital environment.</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Services;
import { AiOutlineDesktop } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa6";
import { MdWebhook } from "react-icons/md";
import { SiGamedeveloper, SiGooglemarketingplatform } from "react-icons/si";
import { TbUserBolt } from "react-icons/tb";

const DigitalMarketing = () => {
    return (
        <div>
            <div>
                <div className="pt-28 pb-20 bg-skin-fillServicesBg">
                    <div className="container mx-auto px-5">
                        <h3 className="text-center text-skin-Heading text-4xl md:text-6xl font-bold">Our Software Services</h3>
                        {/* <p className="text-skin-subHeading leading-7 mt-7 text-center md:w-[70%] w-[85%] lg:w-[47%] mx-auto">There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.</p> */}
                        <div className="gap-2 grid grid-cols-1 md:grid-cols-3 mt-10">
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <FaBusinessTime className="text-skin-linkHover text-6xl group-hover:text-white"></FaBusinessTime>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Custom Software Development</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Tailored solutions for your unique needs, expertly crafted by AubTech.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <SiGamedeveloper className="text-skin-linkHover text-6xl group-hover:text-white"></SiGamedeveloper>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Testing</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Rigorous testing ensuring flawless performance of your software solutions.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <TbUserBolt className="text-skin-linkHover text-6xl group-hover:text-white"></TbUserBolt>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Cloud Services</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Seamless cloud solutions for efficient and scalable digital operations.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%]  hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <AiOutlineDesktop className="text-skin-linkHover text-6xl group-hover:text-white"></AiOutlineDesktop>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Database Management</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Optimize data efficiency with AubTech's robust database management solutions.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%]  hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <MdWebhook className="text-skin-linkHover text-6xl group-hover:text-white"></MdWebhook>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">DevOps Services</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Streamlined development and operations for accelerated software delivery.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <SiGooglemarketingplatform className="text-skin-linkHover text-6xl group-hover:text-white"></SiGooglemarketingplatform>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Scalable Software Design</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Future-proof your software with AubTech's scalable and adaptive design.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default DigitalMarketing;
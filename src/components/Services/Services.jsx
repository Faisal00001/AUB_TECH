import { AiOutlineDesktop } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa6";
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
                                <Link className="link link-underline no-underline link-underline-black text-skin-Heading hover:text-skin-linkHover "> Request Custom Service </Link>
                            </li>
                        </div>
                        <div className="w-full lg:w-[67%] gap-2 grid grid-cols-1 md:grid-cols-2">
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                                <FaBusinessTime className="text-skin-linkHover text-6xl group-hover:text-white"></FaBusinessTime>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Business Stratagy</h3>
                                <p className="text-skin-subHeading group-hover:text-white">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                            </div>
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                                <SiGamedeveloper className="text-skin-linkHover text-6xl group-hover:text-white"></SiGamedeveloper>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Website Development</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                            </div>
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                                <TbUserBolt className="text-skin-linkHover text-6xl group-hover:text-white"></TbUserBolt>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Marketing & Reporting</h3>
                                <p className="text-skin-subHeading group-hover:text-white">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                            </div>
                            <div className="pace-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%]  hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                                <AiOutlineDesktop className="text-skin-linkHover text-6xl group-hover:text-white"></AiOutlineDesktop>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Mobile App Development</h3>
                                <p className="text-skin-subHeading group-hover:text-white">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Services;
import { AiOutlineDesktop } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa6";
import { MdWebhook } from "react-icons/md";
import { SiGamedeveloper, SiGooglemarketingplatform } from "react-icons/si";
import { TbUserBolt } from "react-icons/tb";

const Strategy = () => {
    return (
        <div>
            <div className="mt-20">
                <div className="container mx-auto px-5">
                    <h3 className="text-center text-skin-Heading text-4xl md:text-6xl font-bold">Strategy</h3>
                    <p className="text-skin-subHeading leading-7 mt-7 text-center md:w-[70%] w-[85%] lg:w-[47%] mx-auto">There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.</p>
                    <div className="gap-2 grid grid-cols-1 md:grid-cols-3 mt-10">
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
                        <div className="pace-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%]  hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                            <MdWebhook className="text-skin-linkHover text-6xl group-hover:text-white"></MdWebhook>
                            <h3 className="text-skin-Heading text-lg group-hover:text-white">Website Development</h3>
                            <p className=" text-skin-subHeading group-hover:text-white">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>
                        <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                            <SiGooglemarketingplatform className="text-skin-linkHover text-6xl group-hover:text-white"></SiGooglemarketingplatform>
                            <h3 className="text-skin-Heading text-lg group-hover:text-white">Marketing & Reporting</h3>
                            <p className="text-skin-subHeading group-hover:text-white">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Strategy;
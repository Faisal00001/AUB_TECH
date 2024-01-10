import { GiFlatPlatform } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";
import { RiCommunityFill } from "react-icons/ri";
const SocialMediaManagement = () => {
    return (
        <div>
            <div className="mt-20">
                <div className="container mx-auto px-5">
                    <h3 className="text-center text-skin-Heading text-4xl md:text-6xl font-bold">Social Media Management</h3>
                    <p className="text-skin-subHeading leading-7 mt-7 text-center md:w-[70%] w-[85%] lg:w-[47%] mx-auto">Elevate your brand's online presence with expertly curated content and strategic engagement, fostering meaningful connections and driving impactful digital conversations.</p>
                    <div className="gap-2 grid grid-cols-1 md:grid-cols-3 mt-10">
                        <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                            <GiFlatPlatform className="text-skin-linkHover text-6xl group-hover:text-white"></GiFlatPlatform>
                            <h3 className="text-skin-Heading text-lg group-hover:text-white">Platform Strategy</h3>
                            <p className="text-skin-subHeading group-hover:text-white">Develop a tailored strategy for each social media platform, maximizing your brand's impact by leveraging the unique strengths and nuances of each channel.</p>
                        </div>
                        <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                            <RiCommunityFill className="text-skin-linkHover text-6xl group-hover:text-white"></RiCommunityFill>
                            <h3 className="text-skin-Heading text-lg group-hover:text-white">Community Engagement</h3>
                            <p className=" text-skin-subHeading group-hover:text-white">Foster meaningful connections with your audience, actively engaging and responding to create a thriving online community around your brand.</p>
                        </div>
                        <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                            <IoMdAnalytics className="text-skin-linkHover text-6xl group-hover:text-white"></IoMdAnalytics>
                            <h3 className="text-skin-Heading text-lg group-hover:text-white">Analytics and Insights</h3>
                            <p className="text-skin-subHeading group-hover:text-white">Utilize data analytics to gain insights into social media performance, refining strategies and ensuring your efforts align with business goals.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SocialMediaManagement;
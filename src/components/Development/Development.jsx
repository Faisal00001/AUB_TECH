import { FaSignal } from "react-icons/fa";
import { RiSeoLine } from "react-icons/ri";
import { SiConvertio } from "react-icons/si";
const Development = () => {
    return (
        <div>
            <div className="mt-20">
                <div className="container mx-auto px-5">
                    <div>
                        <h3 className="text-center text-skin-Heading text-4xl md:text-6xl font-bold">Digital Marketing</h3>
                        <p className="text-skin-subHeading leading-7 mt-7 text-center md:w-[70%] w-[85%] lg:w-[47%] mx-auto">Boost your brand's online visibility through strategic digital campaigns. From SEO to enhanced internet presence, we convert engagement into lasting customer relationships.</p>
                        <div className="gap-2 grid grid-cols-1 md:grid-cols-3 mt-10">
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <RiSeoLine className="text-skin-linkHover text-6xl group-hover:text-white"></RiSeoLine>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">SEO Strategies</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Optimize your online presence with tailored SEO strategies, boosting visibility and search engine rankings to drive organic traffic and maximize digital reach.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <FaSignal className="text-skin-linkHover text-6xl group-hover:text-white"></FaSignal>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Internet Presence Enhancement</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Strategically enhance your brand's online visibility, leveraging digital channels to create a strong and impactful internet presence that resonates with your target audience.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <SiConvertio className="text-skin-linkHover text-6xl group-hover:text-white"></SiConvertio>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Engagement Conversion</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Convert online engagement into lasting customer relationships through targeted digital campaigns, fostering meaningful connections that drive customer loyalty and business growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Development;
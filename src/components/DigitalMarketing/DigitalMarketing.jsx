import { BiSolidBookContent } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdMiscellaneousServices, MdOutlineDeveloperMode } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { TbUserBolt } from "react-icons/tb";

const DigitalMarketing = () => {
    return (
        <div>
            <div>
                <div className="pt-28 pb-20 bg-skin-fillServicesBg">
                    <div className="container mx-auto px-5">
                        <h3 className="text-center text-skin-Heading text-4xl md:text-6xl font-bold">Our Core Services</h3>
                        {/* <p className="text-skin-subHeading leading-7 mt-7 text-center md:w-[70%] w-[85%] lg:w-[47%] mx-auto">There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration.</p> */}
                        <div className="gap-2 grid grid-cols-1 md:grid-cols-3 mt-10">
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <SiAntdesign className="text-skin-linkHover text-6xl group-hover:text-white"></SiAntdesign>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Design</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Elevate user experiences with innovative design, fostering seamless interaction and satisfaction in every digital solution. We create Better UI/UX for superior software experiences.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <MdOutlineDeveloperMode className="text-skin-linkHover text-6xl group-hover:text-white"></MdOutlineDeveloperMode>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Development</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Concept to code, we craft robust, scalable software solutions using cutting-edge technologies. Tailored for your business needs, we specialize in web and mobile application development.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <TbUserBolt className="text-skin-linkHover text-6xl group-hover:text-white"></TbUserBolt>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Digital Marketing</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Boost your brand's online visibility through strategic digital campaigns. From SEO to enhanced internet presence, we convert engagement into lasting customer relationships.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%]  hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <BiSolidBookContent className="text-skin-linkHover text-6xl group-hover:text-white"></BiSolidBookContent>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Digital Content</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Captivate audiences with compelling narratives and visually stunning content. From Social Media Management to Graphics Design and Motion Video, we ensure a memorable and impactful digital presence.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%]  hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <MdMiscellaneousServices className="text-skin-linkHover text-6xl group-hover:text-white"></MdMiscellaneousServices>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">IT Services</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Precision in software maintenance and debugging, ensuring your digital assets operate seamlessly and efficiently, elevating your technology performance.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <FaUsers className="text-skin-linkHover text-6xl group-hover:text-white"></FaUsers>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Social Media Management</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Elevate your brand's online presence with expertly curated content and strategic engagement, fostering meaningful connections and driving impactful digital conversations.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default DigitalMarketing;
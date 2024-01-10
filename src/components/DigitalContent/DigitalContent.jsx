import { FaPhotoVideo } from "react-icons/fa";
import { MdTextsms } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";
const DigitalContent = () => {
    return (
        <div>
            <div className="mt-20">
                <div className="pt-28 pb-20 bg-skin-fillServicesBg">
                    <div className="container mx-auto px-5">
                        <h3 className="text-center text-skin-Heading text-4xl md:text-6xl font-bold">Digital Content</h3>
                        <p className="text-skin-subHeading leading-7 mt-7 text-center md:w-[70%] w-[85%] lg:w-[47%] mx-auto">Captivate audiences with compelling narratives and visually stunning content. From Social Media Management to Graphics Design and Motion Video, we ensure a memorable and impactful digital presence.</p>
                        <div className="gap-2 grid grid-cols-1 md:grid-cols-3 mt-10">
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <MdTextsms className="text-skin-linkHover text-6xl group-hover:text-white"></MdTextsms>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Brand Messaging</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Refine and amplify your brand message, ensuring consistency across digital channels and creating a strong and recognizable identity in the digital landscape.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <SiTaichigraphics className="text-skin-linkHover text-6xl group-hover:text-white"></SiTaichigraphics>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Graphics Design</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Design visually stunning graphics that captivate audiences, conveying your brand message with creativity and impact across various digital and print platforms.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <FaPhotoVideo className="text-skin-linkHover text-6xl group-hover:text-white"></FaPhotoVideo>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Motion Video Production</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Produce compelling motion videos that tell captivating stories and bring your brand to life, ensuring your digital content leaves a lasting impression on your audience.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DigitalContent;
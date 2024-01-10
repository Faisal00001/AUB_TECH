import { BiSolidBookContent } from "react-icons/bi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { TbUserBolt } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import "./Services.css";
const Services = () => {
    const navigate = useNavigate()
    const handlePath = (path) => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
        navigate(`/${path}`)
    }
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
                                <Link onClick={() => handlePath('service')} className="link link-underline no-underline link-underline-black text-skin-Heading hover:text-skin-linkHover customCursor font-semibold text-2xl">See More</Link>
                            </li>
                        </div>
                        <div className="w-full lg:w-[67%] gap-2 grid grid-cols-1 md:grid-cols-2">
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 customCursor">
                                <SiAntdesign className="text-skin-linkHover text-6xl group-hover:text-white"></SiAntdesign>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Design</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Elevate user experiences with innovative design, fostering seamless interaction and satisfaction in every digital solution. We create Better UI/UX for superior software experiences.</p>
                            </div>
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 customCursor">
                                <MdOutlineDeveloperMode className="text-skin-linkHover text-6xl group-hover:text-white"></MdOutlineDeveloperMode>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Development</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Concept to code, we craft robust, scalable software solutions using cutting-edge technologies. Tailored for your business needs, we specialize in web and mobile application development.</p>
                            </div>
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 customCursor">
                                <TbUserBolt className="text-skin-linkHover text-6xl group-hover:text-white"></TbUserBolt>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Digital Marketing</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Boost your brand's online visibility through strategic digital campaigns. From SEO to enhanced internet presence, we convert engagement into lasting customer relationships.</p>
                            </div>
                            <div className="space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 customCursor">
                                <BiSolidBookContent className="text-skin-linkHover text-6xl group-hover:text-white"></BiSolidBookContent>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Digital Content</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Captivate audiences with compelling narratives and visually stunning content. From Social Media Management to Graphics Design and Motion Video, we ensure a memorable and impactful digital presence.</p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Services;
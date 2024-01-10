
import { IoLogoApple, IoMdAppstore } from "react-icons/io";
import { SiWebmoney } from "react-icons/si";
const CreativeAgency = () => {
    return (
        <div>
            <div className="mt-20">
                <div className="pt-28 pb-20 bg-skin-fillServicesBg">
                    <div className="container mx-auto px-5">
                        <h3 className="text-center text-skin-Heading text-4xl md:text-6xl font-bold">Software Development</h3>
                        <p className="text-skin-subHeading leading-7 mt-7 text-center md:w-[70%] w-[85%] lg:w-[47%] mx-auto">Concept to code, we craft robust, scalable software solutions using cutting-edge technologies. Tailored for your business needs, we specialize in web and mobile application development.</p>
                        <div className="gap-2 grid grid-cols-1 md:grid-cols-3 mt-10">
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <SiWebmoney className="text-skin-linkHover text-6xl group-hover:text-white"></SiWebmoney>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Web Development</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Build responsive, high-performance websites tailored to your business needs, using cutting-edge technologies to deliver seamless and dynamic online experiences.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <IoMdAppstore className="text-skin-linkHover text-6xl group-hover:text-white"></IoMdAppstore>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Android App Development</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Create powerful and user-friendly Android applications, leveraging the latest technologies to bring your ideas to life on the world's most popular mobile platform.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <IoLogoApple className="text-skin-linkHover text-6xl group-hover:text-white"></IoLogoApple>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">iOS App Development</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Design and develop sophisticated iOS applications, ensuring compatibility with Apple's ecosystem and delivering exceptional user experiences on iPhones and iPad.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreativeAgency;
import { GiArchiveResearch } from "react-icons/gi";
import { MdDesignServices, MdModelTraining } from "react-icons/md";
const Strategy = () => {
    return (
        <div>
            <div className="mt-20">
                <div className="container mx-auto px-5">
                    <h3 className="text-center text-skin-Heading text-4xl md:text-6xl font-bold">Software Design</h3>
                    <p className="text-skin-subHeading leading-7 mt-7 text-center md:w-[70%] w-[85%] lg:w-[47%] mx-auto">Elevate user experiences with innovative design, fostering seamless interaction and satisfaction in every digital solution. We create Better UI/UX for superior software experiences.</p>
                    <div className="gap-2 grid grid-cols-1 md:grid-cols-3 mt-10">
                        <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                            <MdDesignServices className="text-skin-linkHover text-6xl group-hover:text-white"></MdDesignServices>
                            <h3 className="text-skin-Heading text-lg group-hover:text-white">UI/UX Design</h3>
                            <p className="text-skin-subHeading group-hover:text-white">Craft visually appealing interfaces with seamless user experiences, ensuring user satisfaction and engagement through intuitive design solutions for your software applications.</p>
                        </div>
                        <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                            <GiArchiveResearch className="text-skin-linkHover text-6xl group-hover:text-white"></GiArchiveResearch>
                            <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Research</h3>
                            <p className=" text-skin-subHeading group-hover:text-white">Conduct thorough research to identify industry trends, user needs, and innovative solutions, providing valuable insights that shape the foundation of your software projects.</p>
                        </div>
                        <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3 cursor-pointer">
                            <MdModelTraining className="text-skin-linkHover text-6xl group-hover:text-white"></MdModelTraining>
                            <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Modeling</h3>
                            <p className="text-skin-subHeading group-hover:text-white">Develop comprehensive models and prototypes, laying the groundwork for efficient software development by visualizing system architecture and functionality before actual implementation.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Strategy;
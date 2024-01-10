import { CgDebug } from "react-icons/cg";
import { GrHostMaintenance, GrOptimize } from "react-icons/gr";
const ITServices = () => {
    return (
        <div>
            <div className="mt-20">
                <div className="pt-28 pb-20 bg-skin-fillServicesBg">
                    <div className="container mx-auto px-5">
                        <h3 className="text-center text-skin-Heading text-4xl md:text-6xl font-bold">IT Services</h3>
                        <p className="text-skin-subHeading leading-7 mt-7 text-center md:w-[70%] w-[85%] lg:w-[47%] mx-auto">Precision in software maintenance and debugging, ensuring your digital assets operate seamlessly and efficiently, elevating your technology performance.</p>
                        <div className="gap-2 grid grid-cols-1 md:grid-cols-3 mt-10">
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <GrHostMaintenance className="text-skin-linkHover text-6xl group-hover:text-white"></GrHostMaintenance>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Maintenance</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Ensure the ongoing health and performance of your software applications through regular updates, bug fixes, and continuous improvement initiatives.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <CgDebug className="text-skin-linkHover text-6xl group-hover:text-white"></CgDebug>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">Software Debugging</h3>
                                <p className=" text-skin-subHeading group-hover:text-white">Identify and resolve software bugs efficiently, minimizing disruptions and enhancing the reliability and functionality of your digital solutions.</p>
                            </div>
                            <div className="customCursor space-y-4 hover:bg-gradient-to-r from-[#f61b10] to-[#ef0963] group  p-8 w-[90%] hover:rounded-lg transition duration-700 ease-in-out delay-150 hover:-translate-y-3">
                                <GrOptimize className="text-skin-linkHover text-6xl group-hover:text-white"></GrOptimize>
                                <h3 className="text-skin-Heading text-lg group-hover:text-white">System Optimization</h3>
                                <p className="text-skin-subHeading group-hover:text-white">Fine-tune and optimize your digital systems for maximum efficiency and performance, enhancing overall technology capabilities and user experiences.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ITServices;
import { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import PlayVideo from "./PlayVideo";
import ServiceDetailsBanner from "./ServiceBanner/ServiceDetailsBanner";

const ServiceDetails = () => {
    const [showVideo, setShowVideo] = useState(false)
    const closeVideo = () => setShowVideo(false)
    return (
        <div>
            <div>
                <ServiceDetailsBanner></ServiceDetailsBanner>
                <div>
                    <div className="container mx-auto mt-10 md:mt-16 lg:mt-28">
                        <div className="flex flex-col lg:flex-row gap-7 items-center px-8 md:px-14 lg:pl-6">
                            <div className="lg:w-[50%] w-full mb-3 md:mb-10 lg:mb-0">
                                <img className="rounded-lg h-[450px] md:h-full w-full object-cover lg:h-[750px]" src="https://i.ibb.co/tBsxHSg/magnet-me-63-Xr-EEi-Oko8-unsplash.jpg" alt="Service Details" />
                            </div>
                            <div className="lg:w-[50%]">
                                <p className="text-skin-subHeading leading-7 text-base md:text-lg">but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there is not anything embarrassing</p>
                                <p className="mt-7 text-skin-subHeading leading-7 text-base md:text-lg">hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                <h3 className="text-skin-Heading text-2xl md:text-4xl font-medium mt-9">Proceess of metel</h3>
                                <ul className="list-disc ml-5 text-skin-subHeading space-y-2 mt-5 text-base md:text-lg">
                                    <li><p>Yet this above sewed flirted opened ouch</p></li>
                                    <li><p>Goldfinch realistic sporadic ingenuou</p></li>
                                    <li><p>Abominable this abidin far successfully then like piquan</p></li>
                                    <li><p>Risus commodo viverra</p></li>
                                    <li><p>Risus commodo viverra</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row-reverse gap-7 items-center px-8 md:px-14 lg:pl-6 mt-20 md:mt-24">
                            <div className="relative lg:w-[50%] w-full mb-3 md:mb-10 lg:mb-0">
                                <img className="rounded-lg h-[450px] md:h-full w-full object-cover lg:h-[750px]" src="https://i.ibb.co/1q2PZ9r/windows-N1-YOSWr-XQJE-unsplash.jpg" alt="Service Details" />
                                <button className="absolute bg-white w-24 h-24 rounded-full top-[43%] left-[43%]" onClick={() => setShowVideo(true)}>
                                    <div className="flex justify-center items-center">
                                        <IoIosPlay className="text-[#f9004d] text-2xl "></IoIosPlay>
                                    </div>
                                </button>
                            </div>

                            {
                                showVideo && <PlayVideo closeVideo={closeVideo}></PlayVideo>
                            }

                            <div className="lg:w-[50%]">
                                <p className="text-skin-subHeading leading-7 text-base md:text-lg">but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there is not anything embarrassing</p>
                                <p className="mt-7 text-skin-subHeading leading-7 text-base md:text-lg">hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                <h3 className="text-skin-Heading text-2xl md:text-4xl font-medium mt-9">Proceess of metel</h3>
                                <ul className="list-disc text-skin-subHeading space-y-2 mt-5 text-base md:text-lg ml-5">
                                    <li> <p>Yet this above sewed flirted opened ouch</p> </li>
                                    <li><p>Goldfinch realistic sporadic ingenuou</p></li>
                                    <li><p>Abominable this abidin far successfully then like piquan</p></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;
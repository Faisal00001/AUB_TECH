
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import arman from "../../assets/images/Our Teams/arman.jpg";
import arnob from "../../assets/images/Our Teams/arnab.jpg";
import ashik from "../../assets/images/Our Teams/ashik.jpg";
import faisal from "../../assets/images/Our Teams/faisal.jpg";
import shadhin from "../../assets/images/Our Teams/shadhin.jpg";
import shishir from "../../assets/images/Our Teams/shishir.jpg";
import "./OurFunFacts.css";
const OurFunFacts = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <h3 className="text-4xl md:text-6xl font-bold text-skin-Heading text-center">Our Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pl-10 pr-10 md:pl-16 md:pr-16 mt-16">
                        <div className="text-center">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <div className='relative mb-5'>
                                    <h3 className='text-4xl md:text-6xl font-semibold '>
                                        {
                                            !counterOn && <span className='text-skin-count'>10</span>
                                        }
                                        {
                                            counterOn && <CountUp className='text-skin-count' start={0} end={10} duration={2} delay={0} />
                                        }
                                        <span className='text-skin-count text-2xl md:text-4xl absolute top-0'>+</span>
                                    </h3>
                                </div>

                            </ScrollTrigger>

                            <p className="text-skin-subHeading leading-7"> Business Partners
                            </p>
                        </div>
                        <div className="text-center">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <div className='relative mb-5'>
                                    <h3 className='text-4xl md:text-6xl font-semibold '>
                                        {
                                            !counterOn && <span className='text-skin-count'>15</span>
                                        }
                                        {
                                            counterOn && <CountUp className='text-skin-count' start={0} end={15} duration={2} delay={0} />
                                        }
                                        <span className='text-skin-count text-2xl md:text-4xl absolute top-0'>+</span>
                                    </h3>
                                </div>

                            </ScrollTrigger>
                            <p className="text-skin-subHeading leading-7"> Projects Completed</p>
                        </div>
                        <div className="text-center">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <div className='relative mb-5'>
                                    <h3 className='text-4xl md:text-6xl font-semibold '>
                                        {
                                            !counterOn && <span className='text-skin-count'>20</span>
                                        }
                                        {
                                            counterOn && <CountUp className='text-skin-count' start={0} end={20} duration={2} delay={0} />
                                        }
                                        <span className='text-skin-count text-2xl md:text-4xl absolute top-0'>+</span>
                                    </h3>
                                </div>

                            </ScrollTrigger>
                            <p className="text-skin-subHeading leading-7"> IT Professionals
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <div className='bg-skin-fillServicesBg py-24'>
                    <h3 className='text-skin-Heading hidden lg:block text-center  lineGap w-[75%] text-4xl md:text-6xl mx-auto font-bold'>Our Team</h3>
                    <h3 className='text-skin-Heading block lg:hidden text-center font-medium leading-10 w-[75%] text-xl md:text-3xl mx-auto'>Our Team</h3>
                    <p className='mt-10 text-center'>
                        {/* <span className='text-skin-Heading md:text-lg'>AubTech</span>  */}
                        <span className='text-skin-subHeading md:text-lg'> Meet our dynamic team of passionate professionals. Dedicated to innovation, we collaborate to deliver cutting-edge solutions that redefine excellence in the tech industry</span> </p>
                    <div className='md:w-[75%] lg:w-[45%] mx-auto mt-16 px-5'>
                        <div className='flex flex-wrap justify-center gap-5'>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar relative">
                                    <div className="w-24 rounded">
                                        <img className='object-cover' src={arman} alt='Team Member' />
                                    </div>
                                    <span className="top-0 right-0 absolute  w-4 h-4 bg-red-500 border-2 rounded-full transform translate-x-1 -translate-y-1/2"></span>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img className='object-cover' src={ashik} alt='Team member' />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img className='object-cover' src={faisal} alt='Team member' />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img className='object-cover' src={arnob} alt='Team member' />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img className='object-cover' src={shishir} alt='Team Member' />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img className='object-cover' src={shadhin} alt='Team Member' />
                                    </div>
                                </div>
                            </div>
                            {/* <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://i.ibb.co/jLBdPNq/irene-strong-FOUPtq-P-m-Y-unsplash.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://i.ibb.co/K6QBQ1B/Asiful-Bijoy.jpg" />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurFunFacts;
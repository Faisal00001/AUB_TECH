
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import "./OurFunFacts.css";
const OurFunFacts = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <h3 className="text-3xl text-skin-Heading font-medium md:text-4xl text-center">Our Fun Facts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pl-10 pr-10 md:pl-16 md:pr-16 mt-16">
                        <div className="text-center">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <div className='relative mb-5'>
                                    <h3 className='text-4xl md:text-6xl font-semibold '>
                                        {
                                            !counterOn && <span className='text-skin-count'>199</span>
                                        }
                                        {
                                            counterOn && <CountUp className='text-skin-count' start={0} end={199} duration={2} delay={0} />
                                        }
                                        <span className='text-skin-count text-2xl md:text-4xl absolute top-0'>+</span>
                                    </h3>
                                </div>

                            </ScrollTrigger>

                            <p className="text-skin-subHeading leading-7">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                        </div>
                        <div className="text-center">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <div className='relative mb-5'>
                                    <h3 className='text-4xl md:text-6xl font-semibold '>
                                        {
                                            !counterOn && <span className='text-skin-count'>575</span>
                                        }
                                        {
                                            counterOn && <CountUp className='text-skin-count' start={0} end={575} duration={2} delay={0} />
                                        }
                                        <span className='text-skin-count text-2xl md:text-4xl absolute top-0'>+</span>
                                    </h3>
                                </div>

                            </ScrollTrigger>
                            <p className="text-skin-subHeading leading-7">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                        </div>
                        <div className="text-center">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                <div className='relative mb-5'>
                                    <h3 className='text-4xl md:text-6xl font-semibold '>
                                        {
                                            !counterOn && <span className='text-skin-count'>69</span>
                                        }
                                        {
                                            counterOn && <CountUp className='text-skin-count' start={0} end={69} duration={2} delay={0} />
                                        }
                                        <span className='text-skin-count text-2xl md:text-4xl absolute top-0'>+</span>
                                    </h3>
                                </div>

                            </ScrollTrigger>
                            <p className="text-skin-subHeading leading-7">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <div className='bg-skin-fillServicesBg py-24'>
                    <h3 className='text-skin-Heading hidden lg:block text-center font-medium  lineGap w-[75%] text-xl md:text-3xl lg:text-4xl mx-auto'>Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</h3>
                    <h3 className='text-skin-Heading block lg:hidden text-center font-medium leading-10 w-[75%] text-xl md:text-3xl mx-auto'>Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</h3>
                    <p className='mt-16 text-center'><span className='text-skin-Heading md:text-lg'>AKLIMA</span> <span className='text-skin-subHeading md:text-lg'>- COO, AMERIMAR ENTERPRISES, INC.</span> </p>
                    <div className='md:w-[75%] lg:w-[45%] mx-auto mt-16 px-5'>
                        <div className='flex flex-wrap justify-center gap-5'>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar relative">
                                    <div className="w-24 rounded">
                                        <img src="https://i.ibb.co/fvN1Zt9/aatik-tasneem-7om-HUGhhm-Z0-unsplash.jpg" />
                                    </div>
                                    <span className="top-0 right-0 absolute  w-4 h-4 bg-red-500 border-2 rounded-full transform translate-x-1 -translate-y-1/2"></span>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://i.ibb.co/z519ZSY/austin-distel-7uo-Mmz-Pd2-JA-unsplash.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://i.ibb.co/r5CZQhX/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://i.ibb.co/VBr8Jpw/elizeu-dias-2-EGNqazb-AMk-unsplash.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://i.ibb.co/8NC1wq1/irene-strong-23u8-P6g-Dr-KM-unsplash.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://i.ibb.co/7jBy403/irene-strong-CCf-RNx-Abk-YI-unsplash.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className='customCursor transition ease-in-out hover:scale-110'>
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
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurFunFacts;
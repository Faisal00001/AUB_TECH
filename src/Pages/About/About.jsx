import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";

const About = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <div>
                <AboutUsBanner></AboutUsBanner>
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-5 my-24">
                        <div className="w-full lg:w-[45%]">
                            <img src="https://i.ibb.co/HV6jz9R/maxime-9kf6-TF2fack-unsplash.jpg" className="h-[550px] object-cover lg:h-[600px]  mx-auto ml-12 w-[80%] rounded-lg" alt="About Us" />
                        </div>
                        <div className="w-[80%] lg:w-[55%]">
                            <div className="space-y-5 md:pr-10 mt-16 lg:mt-0">
                                <h3 className="text-skin-Heading font-bold text-4xl md:text-6xl">About</h3>
                                <p className="text-skin-subHeading leading-7 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-5 mt-10 ">
                                <div className="space-y-5">
                                    <h3 className="text-skin-Heading text-2xl md:text-3xl font-medium">Who we are</h3>
                                    <p className="text-skin-subHeading leading-7 ">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                                <div className="space-y-5">
                                    <h3 className="text-skin-Heading text-2xl md:text-3xl font-medium">Who we are</h3>
                                    <p className="text-skin-subHeading leading-7 ">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
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
                <div className='mt-28'>
                    <div className='flex justify-end relative'>
                        <img className='w-[94%] rounded-xl' src="https://i.ibb.co/nQn4cLC/austin-distel-mp-N7xj-KQ-Ns-unsplash.jpg" alt="" />
                        <div className='bg-black absolute left-[20%] top-[12%] w-[60%] h-[400px]'>
                            heelo
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;
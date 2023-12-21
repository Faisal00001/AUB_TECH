import { useState } from 'react';
import CountUp from 'react-countup';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollTrigger from 'react-scroll-trigger';
import PageTitle from '../../components/PageTitle/PageTitle';
import Sponsorship from '../../components/Sponsorship/Sponsorship';
import "./About.css";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";
const About = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <div>
                <PageTitle title='AUB TECH - About'></PageTitle>
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
                        <img className='w-full lg:w-[94%] h-[550px] lg:h-[700px] object-cover rounded-xl' src="https://i.ibb.co/rppPhtY/jason-goodman-Oalh2-Moj-Uuk-unsplash.jpg" alt="" />
                        <div className='bg-[#1d1d24] hidden lg:block rounded-xl absolute left-[20%] top-[17%] w-[60%] h-[470px]'>
                            <div className='pt-28 pl-24 pr-32'>
                                <h3 className='text-2xl md:text-4xl font-medium mb-10 findWorkTitle'>Find Your Work Now</h3>
                                <p className='text-skin-navLinkText'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                                <button className="transition mt-10 ease-in-out delay-150 duration-300 hover:-translate-y-1 text-skin-navLinkText  border-solid border-2 border-slate-200 rounded py-2 px-5 hover:bg-skin-navButtonHover text-sm hover:border-[#f9004d] uppercase text-white customCursor">
                                    Get Started
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className='bg-[#1d1d24] block lg:hidden w-full h-[300px]'>
                        <div className='pl-14 pt-14 pr-32'>
                            <h3 className='text-2xl md:text-4xl font-medium mb-7 findWorkTitle'>Find Your Work Now</h3>
                            <p className='text-skin-navLinkText'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                            <button className="transition mt-7 ease-in-out delay-150 duration-300 hover:-translate-y-1 text-skin-navLinkText  border-solid border-2 border-slate-200 rounded py-2 px-5 hover:bg-skin-navButtonHover text-sm hover:border-[#f9004d] uppercase text-white customCursor">
                                Get Started
                            </button>
                        </div>

                    </div>
                    <div className='container mx-auto'>
                        <div className='mt-20'>
                            <h3 className='text-skin-Heading text-3xl md:text-6xl font-bold text-center'>Skilled Team</h3>
                            <p className='mt-5 text-skin-subHeading leading-7 text-center mx-auto w-full md:w-[90%] lg:w-[45%] px-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-16 px-8'>
                                <div className='flex justify-center'>
                                    <div className='relative customCursor group rounded-md overflow-hidden'>
                                        <img
                                            className='h-[500px] group-hover:rounded-md   transition duration-300 filter brightness-75 rounded-md group-hover:brightness-100'
                                            src="https://i.ibb.co/GVdQ69Y/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg"
                                            alt="Team member"
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60'></div>
                                        <div className='absolute bottom-7 left-10 transition duration-300 group-hover:-translate-y-2'>
                                            <h3 className='text-skin-textWhite font-bold opacity-0 group-hover:opacity-100 transition duration-500 delay-100 text-lg'>Jone Due</h3>
                                            <h3 className='text-sm text-skin-navLinkText mt-2 opacity-0 group-hover:opacity-100 transition duration-500 delay-300'>Sr. Web Developer</h3>

                                        </div>
                                        <div className='absolute top-10 left-10 transition duration-300'>
                                            <div className='flex gap-5'>
                                                <FaFacebookF className='text-skin-textWhite opacity-0 group-hover:opacity-100 transition duration-500 delay-100'></FaFacebookF>
                                                <FaLinkedinIn className='text-skin-textWhite opacity-0 group-hover:opacity-100 transition duration-500 delay-300'></FaLinkedinIn>
                                                <FaTwitter className='text-skin-textWhite opacity-0 group-hover:opacity-100 transition duration-500 delay-500'></FaTwitter>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='relative customCursor group rounded-md overflow-hidden'>
                                        <img
                                            className='h-[500px] group-hover:rounded-md   transition duration-300 filter brightness-75 rounded-md group-hover:brightness-100'
                                            src="https://i.ibb.co/Chc5vBy/stefan-stefancik-QXev-Dflbl8-A-unsplash.jpg"
                                            alt="Team member"
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60'></div>
                                        <div className='absolute bottom-7 left-10 transition duration-300 group-hover:-translate-y-2'>
                                            <h3 className='text-skin-textWhite font-bold opacity-0 group-hover:opacity-100 transition duration-500 delay-100 text-lg'>Eleanor Grace</h3>
                                            <h3 className='text-sm text-skin-navLinkText mt-2 opacity-0 group-hover:opacity-100 transition duration-500 delay-300'>Sr. Web Developer</h3>

                                        </div>
                                        <div className='absolute top-10 left-10 transition duration-300'>
                                            <div className='flex gap-5'>
                                                <FaFacebookF className='text-skin-textWhite opacity-0 group-hover:opacity-100 transition duration-500 delay-100'></FaFacebookF>
                                                <FaLinkedinIn className='text-skin-textWhite opacity-0 group-hover:opacity-100 transition duration-500 delay-300'></FaLinkedinIn>
                                                <FaTwitter className='text-skin-textWhite opacity-0 group-hover:opacity-100 transition duration-500 delay-500'></FaTwitter>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='relative customCursor group rounded-md overflow-hidden'>
                                        <img
                                            className='h-[500px] group-hover:rounded-md   transition duration-300 filter brightness-75 rounded-md group-hover:brightness-100'
                                            src="https://i.ibb.co/sCHQCDM/luis-villasmil-hh3-Vi-D0r0-Rc-unsplash.jpg"
                                            alt=""
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60'></div>
                                        <div className='absolute bottom-7 left-10 transition duration-300 group-hover:-translate-y-2'>
                                            <h3 className='text-skin-textWhite font-bold opacity-0 group-hover:opacity-100 transition duration-500 delay-100 text-lg'>Oliver James</h3>
                                            <h3 className='text-sm text-skin-navLinkText mt-2 opacity-0 group-hover:opacity-100 transition duration-500 delay-300'>Sr. Web Developer</h3>

                                        </div>
                                        <div className='absolute top-10 left-10 transition duration-300'>
                                            <div className='flex gap-5'>
                                                <FaFacebookF className='text-skin-textWhite opacity-0 group-hover:opacity-100 transition duration-500 delay-100'></FaFacebookF>
                                                <FaLinkedinIn className='text-skin-textWhite opacity-0 group-hover:opacity-100 transition duration-500 delay-300'></FaLinkedinIn>
                                                <FaTwitter className='text-skin-textWhite opacity-0 group-hover:opacity-100 transition duration-500 delay-500'></FaTwitter>
                                            </div>



                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                    <div className='container mx-auto'>
                        <div className='mt-20'>
                            <div className='bg-skin-fillServicesBg py-24'>
                                <h3 className='text-skin-Heading hidden lg:block text-center font-medium  lineGap w-[75%] text-xl md:text-3xl lg:text-4xl mx-auto'>Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</h3>
                                <h3 className='text-skin-Heading block lg:hidden text-center font-medium leading-10 w-[75%] text-xl md:text-3xl mx-auto'>Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</h3>
                                <p className='mt-16 text-center'><span className='text-skin-Heading md:text-lg'>AKLIMA</span> <span className='text-skin-subHeading md:text-lg'>- COO, AMERIMAR ENTERPRISES, INC.</span> </p>
                                <div className='md:w-[75%] lg:w-[45%] mx-auto mt-16 px-5'>
                                    <div className='flex flex-wrap justify-center gap-5'>
                                        <div className='transition ease-in-out hover:scale-110 customCursor'>
                                            <div className="avatar relative">
                                                <div className="w-24 rounded">
                                                    <img src="https://i.ibb.co/fvN1Zt9/aatik-tasneem-7om-HUGhhm-Z0-unsplash.jpg" />
                                                </div>
                                                <span className="top-0 right-0 absolute  w-4 h-4 bg-red-500 border-2 rounded-full transform translate-x-1 -translate-y-1/2"></span>
                                            </div>
                                        </div>
                                        <div className='transition ease-in-out hover:scale-110 customCursor'>
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src="https://i.ibb.co/z519ZSY/austin-distel-7uo-Mmz-Pd2-JA-unsplash.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='transition ease-in-out hover:scale-110 customCursor'>
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src="https://i.ibb.co/r5CZQhX/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='transition ease-in-out hover:scale-110 customCursor'>
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src="https://i.ibb.co/VBr8Jpw/elizeu-dias-2-EGNqazb-AMk-unsplash.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='transition ease-in-out hover:scale-110 customCursor'>
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src="https://i.ibb.co/8NC1wq1/irene-strong-23u8-P6g-Dr-KM-unsplash.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='transition ease-in-out hover:scale-110 customCursor'>
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src="https://i.ibb.co/7jBy403/irene-strong-CCf-RNx-Abk-YI-unsplash.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='transition ease-in-out hover:scale-110 customCursor'>
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src="https://i.ibb.co/jLBdPNq/irene-strong-FOUPtq-P-m-Y-unsplash.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='transition ease-in-out hover:scale-110 customCursor'>
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
                    <Sponsorship></Sponsorship>


                </div>

            </div>
        </div>
    );
};

export default About;
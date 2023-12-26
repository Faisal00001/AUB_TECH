import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from 'react-hot-toast';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import PageTitle from "../../components/PageTitle/PageTitle";
import Sponsorship from "../../components/Sponsorship/Sponsorship";
import ContactUsBanner from "./ContactUsBanner/ContactUsBanner";
const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_d3r2r0h', 'template_70fbwtx', form.current, 'y_zvZgrF4cZ8bnWDW')
            .then((result) => {
                console.log(result.text);
                toast.success("Email Send Successfully")
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <PageTitle title="AUB TECH - Contact"></PageTitle>
            <ContactUsBanner></ContactUsBanner>
            <div className="bg-skin-fillServicesBg pb-28">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 pt-36 px-8 md:px-14">
                    <div className="relative customCursor bg-skin-contactUsCardBg py-14 px-10 rounded-xl border-2 group border-gray-200">
                        <h3 className="text-lg font-bold">Contact With Phone Number</h3>
                        <p className="mt-5 text-skin-subHeading mb-1 hover:text-[#f9004d]">+057 254 365 456</p>
                        <p className="text-skin-subHeading hover:text-[#f9004d]">+856 325 652 984</p>
                        <div className="absolute transition duration-300 group-hover:delay-150 group-hover:bg-skin-navButtonHover flex justify-center items-center -translate-y-1/2 top-0 w-20 h-20 border-2 border-gray-200 rounded-full bg-skin-contactUsCardBg">
                            <FaHeadphones className="text-skin-count font-bold duration-300 transition group-hover:delay-150 group-hover:text-skin-textWhite text-3xl"></FaHeadphones>
                        </div>

                    </div>
                    <div>
                        <div className="relative customCursor group bg-skin-contactUsCardBg py-14 px-10 rounded-xl border-2 border-gray-200">
                            <h3 className="text-lg font-bold">Email Address</h3>
                            <p className="mt-5 text-skin-subHeading mb-1 hover:text-[#f9004d]">admin@gmail.com</p>
                            <p className="text-skin-subHeading hover:text-[#f9004d]">example@gmail.com</p>
                            <div className="absolute transition duration-300 group-hover:delay-150 group-hover:bg-skin-navButtonHover flex justify-center items-center -translate-y-1/2 top-0 w-20 h-20 border-2 border-gray-200 rounded-full bg-skin-contactUsCardBg">
                                <MdOutlineMailOutline className="text-skin-count font-bold duration-300 transition group-hover:delay-150 group-hover:text-skin-textWhite text-3xl"></MdOutlineMailOutline>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative customCursor group bg-skin-contactUsCardBg py-14 px-10 rounded-xl border-2 border-gray-200">
                            <h3 className="text-lg font-bold">Location</h3>
                            <p className="mt-5 text-skin-subHeading mb-1">5678 Bangla Main Road, cities 580</p>
                            <p className="text-skin-subHeading">GBnagla, example 54786</p>
                            <div className="absolute transition duration-300 group-hover:delay-150 group-hover:bg-skin-navButtonHover flex justify-center items-center -translate-y-1/2 top-0 w-20 h-20 border-2 border-gray-200 rounded-full bg-skin-contactUsCardBg">
                                <FaMapMarkerAlt className="text-skin-count font-bold duration-300 transition group-hover:delay-150 group-hover:text-skin-textWhite text-3xl"></FaMapMarkerAlt>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Us Form */}
            <section className="mt-36">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="lg:flex-1 px-8 md:pl-14 mt-10">
                        <h3 className="text-skin-Heading text-4xl md:text-6xl font-bold">Contact Us.</h3>
                        <p className="text-skin-subHeading leading-7 mt-5 mb-12 md:w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
                        <form ref={form} onSubmit={sendEmail} className="lg:w-[90%] md:pr-14 lg:pl-0">
                            <div className="mb-5">
                                <input type="text" name='user_name' className="border-2 border-gray-200 px-4 py-3 w-full focus:border-[#f9004d] focus:outline-none rounded-md text-sm" placeholder="Your Name" />
                                <input type="email" name='user_email' className="border-2 border-gray-200 mt-5 px-4 py-3 w-full focus:border-[#f9004d] focus:outline-none rounded-md text-sm" placeholder="Your Email" />
                                <input type="text" name='user_phoneNumber' className="border-2 border-gray-200 mt-5 px-4 py-3 w-full focus:border-[#f9004d] focus:outline-none rounded-md text-sm" placeholder="Phone Number" />
                                <input type="text" name='user_subject' className="border-2 border-gray-200 mt-5 px-4 py-3 w-full focus:border-[#f9004d] focus:outline-none rounded-md text-sm" placeholder="Subject" />
                                <textarea name="message" id="" rows="4" className="border-2 border-gray-200 mt-5 px-4 py-3 w-full focus:border-[#f9004d] focus:outline-none rounded-md text-sm" placeholder="Your Message"></textarea>
                            </div>
                            <button className="transition  ease-in-out delay-150 hover:-translate-y-1 font-light duration-300 text-skin-textWhite hover:text-skin-footerButtonText  border-solid border-2 border-[#f9004d] rounded-lg py-2 md:py-3 md:px-8 px-4 lg:px-12 text-base  lg:text-lg hover:bg-white hover:border-[#f9004d] bg-[#f9004d] customCursor">
                                Submit Now
                            </button>
                        </form>
                    </div>
                    <div className="lg:flex-1 px-8 md:px-14  lg:px-0 lg:pr-5">
                        <img className="max-h-[643px] w-full rounded-lg" src="https://i.ibb.co/98ywPFn/annie-spratt-v-Ggn0x-Ldy8s-unsplash.jpg" alt="" />
                    </div>
                </div>
            </section>
            <Sponsorship></Sponsorship>
        </div>
    );
};

export default ContactUs;
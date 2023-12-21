import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const OurWorks = () => {
    return (
        <div>
            <div className="container mt-24 mx-auto pb-20">
                <div className="pl-8 space-y-7">
                    <h3 className="text-4xl md:text-6xl text-skin-Heading font-bold">Our Works</h3>
                    <p className="text-skin-subHeading  leading-7">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper cursor-pointer mb-24 pt-20 pb-24 px-4"
            >
                <SwiperSlide>
                    <div className='flex justify-center px-2 customCursor'>
                        <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300 '>
                            <img
                                className='h-[500px] filter brightness-75 rounded-md  group-hover:brightness-100'
                                src="https://i.ibb.co/4K6PmXP/ahmed-raza-kz-Xn-UW7-Yp-Nu-G8-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60 '></div>
                            <div className='absolute top-64 left-10 '>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase customCursor'>Case Study</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center px-2 customCursor'>
                        <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                            <img
                                className='h-[500px] filter brightness-75 rounded-md  group-hover:brightness-100'
                                src="https://i.ibb.co/WsMVb3W/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60 '></div>
                            <div className='absolute top-64 left-10 '>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase customCursor'>Case Study</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center px-2 customCursor'>
                        <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                            <img
                                className='h-[500px] filter brightness-75 rounded-md  group-hover:brightness-100'
                                src="https://i.ibb.co/3Cxjwrr/javier-garcia-J3sivic-Mj8-Y-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60 '></div>
                            <div className='absolute top-64 left-10 '>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase customCursor'>Case Study</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center px-2 customCursor'>
                        <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                            <img
                                className='h-[500px] filter brightness-75 rounded-md  group-hover:brightness-100'
                                src="https://i.ibb.co/h1zK1HZ/kazi-mizan-po-GCj-VOQAtk-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60 '></div>
                            <div className='absolute top-64 left-10 '>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase customCursor'>Case Study</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center px-2 customCursor'>
                        <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                            <img
                                className='h-[500px] filter brightness-75 rounded-md  group-hover:brightness-100'
                                src="https://i.ibb.co/8rvrhn8/laura-vinck-Hyu76lo-QLdk-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60 '></div>
                            <div className='absolute top-64 left-10 '>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase customCursor'>Case Study</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center px-2 customCursor'>
                        <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                            <img
                                className='h-[500px] filter brightness-75 rounded-md  group-hover:brightness-100'
                                src="https://i.ibb.co/dWnpWsR/nith-in-w1-N1-Wm-LDy-HU-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60 '></div>
                            <div className='absolute top-64 left-10 '>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase customCursor'>Case Study</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center px-2 customCursor'>
                        <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                            <img
                                className='h-[500px] filter brightness-75 rounded-md  group-hover:brightness-100'
                                src="https://i.ibb.co/HnG8snv/omid-bonyadian-v-GIAPTaudms-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60 '></div>
                            <div className='absolute top-64 left-10 '>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase customCursor'>Case Study</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center px-2 customCursor'>
                        <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                            <img
                                className='h-[500px] filter brightness-75 rounded-md  group-hover:brightness-100'
                                src="https://i.ibb.co/m5Vsnx1/rahabi-khan-e-Nafqf-0-ZWQ-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60 '></div>
                            <div className='absolute top-64 left-10 '>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase customCursor'>Case Study</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center px-2 customCursor'>
                        <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                            <img
                                className='h-[500px] filter brightness-75 rounded-md  group-hover:brightness-100'
                                src="https://i.ibb.co/3rRX4VB/warren-bh4-LQHc-Ocx-E-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60 '></div>
                            <div className='absolute top-64 left-10 '>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase customCursor'>Case Study</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default OurWorks;
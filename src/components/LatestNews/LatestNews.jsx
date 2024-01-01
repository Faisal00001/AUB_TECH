

const LatestNews = () => {
    return (
        <div>
            <div className="container mx-auto mt-24">
                <h3 className="pl-10 text-4xl md:text-6xl text-skin-Heading font-bold">Testimonials</h3>
                <div className="mt-6 pl-10 pr-10 flex flex-col lg:flex-row">
                    <div className="w-full md:w-[70%]">
                        <p className="text-skin-subHeading leading-7">
                            AubTech transformed our business with its innovative solutions. The user-friendly interface and excellent support make it a standout choice. Highly recommended for powerful and efficient software solutions.
                        </p>
                    </div>
                    {/* <div className="flex-1 mt-6 flex lg:mt-0 justify-start md:justify-end">
                        <li className="list-none">
                            <Link className="link link-underline no-underline link-underline-black text-skin-Heading hover:text-skin-linkHover ">View All News</Link>
                        </li>
                    </div> */}
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[100px] pl-10 pr-10 mb-10">
                    <div className="flex justify-center">
                        <div className='customCursor relative  group rounded-md overflow-hidden'>
                            <img
                                className='h-[500px] group-hover:rounded-md  group-hover:scale-125 transition duration-300  object-cover filter brightness-75 rounded-md   group-hover:brightness-100'
                                src="https://i.ibb.co/Gv1tdvQ/james-barr-o-Rs-Se-Yq-JUg-Y-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60'></div>
                            <div className='absolute bottom-11 left-10 transition duration-300 group-hover:-translate-y-10'>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>Getting tickets to <br /> the big show</h3>
                                <button className='text-skin-textWhite border-solid mt-10 hidden group-hover:block text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d] hover:-translate-y-2 duration-300 delay-150 uppercase customCursor'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className='customCursor relative  group rounded-md overflow-hidden'>
                            <img
                                className='h-[500px] group-hover:rounded-md  group-hover:scale-125 transition duration-300  object-cover filter brightness-75 rounded-md   group-hover:brightness-100'
                                src="https://i.ibb.co/ypWw6hZ/oliver-ragfelt-kh-V4f-Ty6-D8-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60'></div>
                            <div className='absolute bottom-11 left-10 transition duration-300 group-hover:-translate-y-10'>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>A big ticket gone to be an interesting</h3>
                                <button className='text-skin-textWhite border-solid mt-10 hidden group-hover:block text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d] hover:-translate-y-2 duration-300 delay-150 uppercase customCursor'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className='customCursor relative group rounded-md overflow-hidden'>
                            <img
                                className='h-[500px] group-hover:rounded-md  group-hover:scale-125 transition duration-300 object-cover filter brightness-75 rounded-md   group-hover:brightness-100'
                                src="https://i.ibb.co/tb7zTWb/tetiana-shyshkina-56s6-TW46o-RE-unsplash.jpg"
                                alt=""
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-[#fc004d] to-[#000] group-hover:rounded-md opacity-0 group-hover:opacity-60'></div>
                            <div className='absolute bottom-11 left-10 transition duration-300 group-hover:-translate-y-10'>
                                <p className='text-skin-navLinkText'>Development</p>
                                <h3 className='text-2xl font-semibold text-skin-textWhite mt-6'>A big ticket gone to be an interesting</h3>
                                <button className='text-skin-textWhite border-solid mt-10 hidden group-hover:block text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d] hover:-translate-y-2 duration-300 delay-150 uppercase customCursor'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sponsorship */}
                {/* <Sponsorship></Sponsorship> */}
            </div>
        </div>
    );
};

export default LatestNews;
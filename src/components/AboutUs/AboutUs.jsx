import mountain from "../../assets/images/navImages/mountain.jpg";

const AboutUs = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-5 my-24 lg:mt-0 ">
                <div className="w-full lg:w-[45%]">
                    <img src={mountain} className="h-[550px]  lg:h-[600px] lg:-mt-20 mx-auto ml-12 w-[80%] rounded-lg" alt="Mountain" />
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
    );
};

export default AboutUs;
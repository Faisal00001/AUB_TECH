
import AboutUs from "../../components/AboutUs/AboutUs";
import OurFunFacts from "../../components/OurFunFacts/OurFunFacts";
import OurWorks from "../../components/OurWorks/OurWorks";
import PageTitle from "../../components/PageTitle/PageTitle";
import Services from "../../components/Services/Services";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div>

            <PageTitle title="AUB TECH - Home"></PageTitle>
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <Services></Services>
            <OurWorks></OurWorks>
            <OurFunFacts></OurFunFacts>
            {/* <LatestNews></LatestNews> */}

        </div>
    );
};

export default Home;
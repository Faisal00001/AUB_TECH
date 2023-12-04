
import AboutUs from "../../components/AboutUs/AboutUs";
import LatestNews from "../../components/LatestNews/LatestNews";
import OurFunFacts from "../../components/OurFunFacts/OurFunFacts";
import OurWorks from "../../components/OurWorks/OurWorks";
import Services from "../../components/Services/Services";
import Footer from "../Shared/Footer/Footer";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <Services></Services>
            <OurWorks></OurWorks>
            <OurFunFacts></OurFunFacts>
            <LatestNews></LatestNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
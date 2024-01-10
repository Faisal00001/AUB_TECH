import CreativeAgency from "../../components/CreativeAgency/CreativeAgency";
import Development from "../../components/Development/Development";
import DigitalContent from "../../components/DigitalContent/DigitalContent";
import DigitalMarketing from "../../components/DigitalMarketing/DigitalMarketing";
import ITServices from "../../components/ITServices/ITServices";
import PageTitle from "../../components/PageTitle/PageTitle";
import SocialMediaManagement from "../../components/SocialMediaManagement/SocialMediaManagement";
import Strategy from "../../components/Strategy/Strategy";
import ServiceBanner from "./ServiceBanner/ServiceBanner";


const Service = () => {
    return (
        <div>
            <PageTitle title="AUB TECH - Service"></PageTitle>
            <ServiceBanner></ServiceBanner>
            <DigitalMarketing></DigitalMarketing>
            <Strategy></Strategy>
            <CreativeAgency></CreativeAgency>
            <Development></Development>
            <DigitalContent></DigitalContent>
            <SocialMediaManagement></SocialMediaManagement>
            <ITServices></ITServices>
        </div>
    );
};

export default Service;
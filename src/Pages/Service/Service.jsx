import CreativeAgency from "../../components/CreativeAgency/CreativeAgency";
import Development from "../../components/Development/Development";
import DigitalMarketing from "../../components/DigitalMarketing/DigitalMarketing";
import PageTitle from "../../components/PageTitle/PageTitle";
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
        </div>
    );
};

export default Service;
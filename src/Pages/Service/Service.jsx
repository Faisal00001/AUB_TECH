import CreativeAgency from "../../components/CreativeAgency/CreativeAgency";
import Development from "../../components/Development/Development";
import DigitalMarketing from "../../components/DigitalMarketing/DigitalMarketing";
import Strategy from "../../components/Strategy/Strategy";
import ServiceBanner from "./ServiceBanner/ServiceBanner";


const Service = () => {
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <DigitalMarketing></DigitalMarketing>
            <Strategy></Strategy>
            <CreativeAgency></CreativeAgency>
            <Development></Development>
        </div>
    );
};

export default Service;
import FreeServices from "./FreeServices";
import PaidServices from "./PaidServices";

const Services = () => {
    return ( 
    <>
    <p>Services</p>
    <p>We offer a wide rage of crypto and trading based services which we <br /> 
    have categorized into <span>Paid Services</span> and <span>Free Services</span></p>

    <article>
        <FreeServices />
        <PaidServices />
    </article>
    </> 
    );
}
 
export default Services;
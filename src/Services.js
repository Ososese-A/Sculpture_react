import FreeServices from "./FreeServices";
import PaidServices from "./PaidServices";

const Services = () => {
    return ( 
    <>
    <div className="serv">
    <p className="title">Services</p>
    <p className="tit-txt">We offer a wide rage of crypto and trading based services which we <br /> 
    have categorized into <span className="head-em">Paid Services</span> and <span className="head-em">Free Services</span></p>

    <article>
        <FreeServices />
        <PaidServices />
    </article>
    </div>
    </> 
    );
}
 
export default Services;
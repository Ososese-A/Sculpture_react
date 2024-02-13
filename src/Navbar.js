import logo from "./assets/logo.svg";

const Navbar = () => {
    return (
        <>
        <div className="nav">
        <a className="nava" href=".header">Home</a>
        <a className="nava" href=".header">Services</a>
        <a className="nava" href=".header"><img src={logo} alt="Sculture strings traders logo" /></a>
        <a className="nava" href=".header">Payment</a>
        <a className="nava" href=".header">Contact</a>
        </div>
        </>
    );
}
 
export default Navbar;
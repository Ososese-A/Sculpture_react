import email from "./assets/email.svg";
import facebook from "./assets/facebook.svg";
import phone from "./assets/Phone.svg";
import twitter from "./assets/twitter.svg";
import whatsapp from "./assets/whatsapp.svg";
import instagram from "./assets/instagram.svg";
import telegram from "./assets/telegram.svg";
import tiktok from "./assets/tiktok.svg";
import Faq from "./Faq";

const Contact = () => {
    return ( 
        <>
        <p>Contact</p>
        <p>If you have any question feel free to contact us through any of the following platforms;</p>
        <div>
            <div>
                <div>
                    <img src={email} alt="email icon" />
                    <div>
                        <p>Email</p>
                        <p>sculpturetrading@gamil.com</p>
                    </div>
                </div>
                <div>
                    <img src={phone} alt="phone icon" />
                    <div>
                        <p>Phone</p>
                        <p>+234 812 9923 959</p>
                    </div>
                </div>
                <div>
                    <img src={whatsapp} alt="whatsapp icon" />
                    <div>
                        <p>Whatsapp</p>
                        <p>+234 812 9923 959</p>
                    </div>
                </div>
                <div>
                    <img src={telegram} alt="telegram icon" />
                    <div>
                        <p>Telegram</p>
                        <p>+234 812 9923 959</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img src={facebook} alt="facebook icon" />
                    <div>
                        <p>Facebook</p>
                        <p>ScultureTrading</p>
                    </div>
                </div>
                <div>
                    <img src={twitter} alt="twitter icon" />
                    <div>
                        <p>Twitter</p>
                        <p>@sculturestring</p>
                    </div>
                </div>
                <div>
                    <img src={instagram} alt="instagram icon" />
                    <div>
                        <p>Instagram</p>
                        <p>@sculturestring</p>
                    </div>
                </div>
                <div>
                    <img src={tiktok} alt="tiktok icon" />
                    <div>
                        <p>Tiktok</p>
                        <p>@sculturestring</p>
                    </div>
                </div>
            </div>
        </div>

        <Faq />
        </>
     );
}
 
export default Contact;
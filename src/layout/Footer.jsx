import React from "react";
import LocationIcon from "../assests/icons/LocationIcon";
import FacebookIcon from "../assests/icons/social/FacebookIcon";
import InstagramIcon from "../assests/icons/social/InstagramIcon";
import TwitterIcon from "../assests/icons/social/TwitterIcon";
import WhatsAppIcon from "../assests/icons/social/WhatsAppIcon";
import TelefoneIcon from "../assests/icons/TelefoneIcon";

function Footer() {
    return (
        <footer id="footer" className="wrapper">
            <div className="about">
                <h2>Sobre nós</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam neque sequi iste facilis asperiores quidem iusto? Alias
                    quidem iure repellendus est voluptas nostrum, nihil
                    repudiandae autem sed vitae, fugit dicta?
                </p>
            </div>
            <div className="contact">
                <ul>
                    <li>
                        <LocationIcon width={20} height={20} /> São Paulo - Sp
                    </li>
                    <li>
                        <TelefoneIcon width={20} height={20} />
                        +55 11 99999-9999
                    </li>
                </ul>
            </div>
            <div className="footerSocialMedia">
                <ul>
                    <li>
                        <WhatsAppIcon width={24} height={24} />
                        <a href="https://linkwhats.app/c718c9"></a>
                    </li>
                    <li>
                        <InstagramIcon width={24} height={24} />
                    </li>
                    <li>
                        <FacebookIcon width={24} height={24} />
                    </li>
                    <li>
                        <TwitterIcon width={24} height={24} />
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

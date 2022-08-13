import React from "react";
import FacebookIcon from "../../assests/icons/social/FacebookIcon";
import InstagramIcon from "../../assests/icons/social/InstagramIcon";
import TwitterIcon from "../../assests/icons/social/TwitterIcon";
import WhatsAppIcon from "../../assests/icons/social/WhatsAppIcon";

function SocialMedia() {
    return (
        <div className="social-media">
            <h3>Redes Sociais</h3>
            <ul>
                <li>
                    <WhatsAppIcon />
                    <a href="https://linkwhats.app/c718c9">WhatsApp</a>
                </li>
                <li>
                    <InstagramIcon /> Instagram
                </li>
                <li>
                    <FacebookIcon /> Facebook
                </li>
                <li>
                    <TwitterIcon /> Twitter
                </li>
            </ul>
        </div>
    );
}

export default SocialMedia;

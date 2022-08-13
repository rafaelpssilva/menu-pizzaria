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
                    <WhatsAppIcon width={24} height={24} />
                    <a href="https://linkwhats.app/c718c9">WhatsApp</a>
                </li>
                <li>
                    <InstagramIcon width={24} height={24} /> Instagram
                </li>
                <li>
                    <FacebookIcon width={24} height={24} /> Facebook
                </li>
                <li>
                    <TwitterIcon width={24} height={24} /> Twitter
                </li>
            </ul>
        </div>
    );
}

export default SocialMedia;

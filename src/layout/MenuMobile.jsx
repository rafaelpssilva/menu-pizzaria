import React from "react";
import MenuIcon from "../assests/icons/MenuIcon";
import WhatsAppIcon from "../assests/icons/social/WhatsAppIcon";
import WhatsappIcon from "../assests/icons/WhatsappIcon";
import Informations from "./menu-components/Informations";
import SocialMedia from "./menu-components/SocialMedia";

function MenuMobile({ toogleMenu }) {
    return (
        <>
            <div className="menuBox" onClick={() => toogleMenu()}>
                <MenuIcon />
                <a href="https://linkwhats.app/c718c9">
                    <WhatsappIcon />
                </a>
            </div>
            <Informations />
            <SocialMedia />
        </>
    );
}

export default MenuMobile;

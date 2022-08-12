import React from "react";
import MenuIcon from "../assests/icons/MenuIcon";
import LogoIcon from "../assests/icons/LogoIcon.png";
import CloseMenuIcon from "../assests/icons/CloseMenuIcon";
import LocationIcon from "../assests/icons/LocationIcon";
import TelefoneIcon from "../assests/icons/TelefoneIcon";

// SOCIAL
import WhatsAppIcon from "../assests/icons/social/WhatsAppIcon";
import WhatsappIcon from "../assests/icons/WhatsappIcon";
import InstagramIcon from "../assests/icons/social/InstagramIcon";
import FacebookIcon from "../assests/icons/social/FacebookIcon";
import TwitterIcon from "../assests/icons/social/TwitterIcon";

function Header() {
    const [openMenu, setOpenMenu] = React.useState(false);

    if (openMenu) {
        document.body.style.overflow = "hidden";
    }

    if (!openMenu) {
        document.body.style.overflow = "auto";
    }

    return (
        <header id="header" className="wrapper">
            <div className="menu">
                <div
                    className="menuBox"
                    onClick={() => {
                        setOpenMenu(!openMenu);
                        console.log(openMenu);
                    }}
                >
                    <MenuIcon />
                </div>
                {openMenu && (
                    <div className="menuMobile">
                        <div
                            className="menuBox"
                            onClick={() => {
                                setOpenMenu(!openMenu);
                                console.log(openMenu);
                            }}
                        >
                            <MenuIcon />
                        </div>
                        <div className="informations">
                            <h1 className="logo">Pizzaria</h1>
                            <div className="informations-prime">
                                <div className="location">
                                    <LocationIcon />
                                    <p>Location</p>
                                </div>
                                <div className="telefone">
                                    <TelefoneIcon />
                                    <p>Telefone</p>
                                </div>
                            </div>
                        </div>
                        <div className="options-food">
                            <h3>Redes Sociais</h3>
                            <ul>
                                <li>
                                    <WhatsAppIcon />
                                    WhatsApp
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
                    </div>
                )}
                <div className="menuLogo">
                    <a href="https://linkwhats.app/c718c9">
                        <WhatsappIcon />
                    </a>
                </div>
            </div>
            <div className="title-message">
                <h2>Boa noite, qual será o pedido de hoje?</h2>
            </div>
        </header>
    );
}

export default Header;

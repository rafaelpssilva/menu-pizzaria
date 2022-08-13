import React from "react";

// ICON
import WhatsappIcon from "../assests/icons/WhatsappIcon";
import MenuMobile from "./MenuMobile";
import MenuIcon from "../assests/icons/MenuIcon";

function Header() {
    const [openMenu, setOpenMenu] = React.useState(false);

    function toogleMenu() {
        setOpenMenu(!openMenu);
    }

    if (openMenu) {
        document.body.style.overflow = "hidden";
    }

    if (!openMenu) {
        document.body.style.overflow = "auto";
    }

    function introductoryMessage() {
        let currentTime = new Date();

        let hours = currentTime.getHours();

        if (hours > 0 && hours < 5) {
            return "Boa madrugada, qual será o pedido de hoje?";
        } else if (hours >= 5 && hours < 13) {
            return "Boa dia, qual será o pedido de hoje?";
        } else if (hours >= 13 && hours < 18) {
            return "Boa tarde, qual será o pedido de hoje?";
        } else if (hours >= 18 && hours <= 23) {
            return "Boa noite, qual será o pedido de hoje?";
        }
    }

    return (
        <header id="header" className="wrapper">
            <div className="menu">
                <div className="menuBox" onClick={() => toogleMenu()}>
                    <MenuIcon />
                </div>

                <div className="menuWathsap">
                    <a href="https://linkwhats.app/c718c9">
                        <WhatsappIcon />
                    </a>
                </div>
            </div>

            {openMenu && (
                <div id="menuMobile">
                    <MenuMobile toogleMenu={toogleMenu} />
                </div>
            )}

            <div className="title-message">
                <h2>{introductoryMessage()}</h2>
            </div>
        </header>
    );
}

export default Header;

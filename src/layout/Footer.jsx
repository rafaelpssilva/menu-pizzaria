import React from "react";
import LocationIcon from "../assests/icons/LocationIcon";
import FacebookIcon from "../assests/icons/social/FacebookIcon";
import InstagramIcon from "../assests/icons/social/InstagramIcon";
import TwitterIcon from "../assests/icons/social/TwitterIcon";
import WhatsAppIcon from "../assests/icons/social/WhatsAppIcon";
import TelefoneIcon from "../assests/icons/TelefoneIcon";

import PizzariaImg from "../assests/products/pizzaria.jpg";

import Slider from "react-slick";

function Footer() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <footer id="footer" className="wrapper">
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <div className="about">
                <h2>Sobre nós</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam neque sequi iste facilis asperiores quidem iusto? Alias
                    quidem iure repellendus est voluptas nostrum, nihil
                    repudiandae autem sed vitae, fugit dicta?
                </p>

                <Slider {...settings} className="about-slider">
                    <div>
                        <img
                            className="img-pizzaria"
                            src={PizzariaImg}
                            alt=" foto do estabelecimento"
                        />
                    </div>
                    <div>
                        <img
                            className="img-pizzaria"
                            src="https://cdn.pixabay.com/photo/2016/08/25/19/38/baker-1620504_960_720.jpg"
                            alt=" foto do estabelecimento"
                        />
                    </div>
                    <div>
                        <img
                            className="img-pizzaria"
                            src="https://cdn.pixabay.com/photo/2018/04/11/03/13/food-3309419_960_720.jpg"
                            alt=" foto do estabelecimento"
                        />
                    </div>
                    <div>
                        <img
                            className="img-pizzaria"
                            src="https://cdn.pixabay.com/photo/2021/09/02/13/36/pizza-6593504_960_720.jpg"
                            alt=" foto do estabelecimento"
                        />
                    </div>
                </Slider>
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

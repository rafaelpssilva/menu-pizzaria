import React from "react";
import LocationIcon from "../../assests/icons/LocationIcon";
import TelefoneIcon from "../../assests/icons/TelefoneIcon";

function Informations() {
    return (
        <div className="informations">
            <h1 className="logo">Pizzaria</h1>
            <div className="informations-prime">
                <div className="location">
                    <LocationIcon width={54} height={54} />
                    <p>
                        <a href="https://www.google.com.br/maps/place/S%C3%A3o+Paulo,+SP/">
                            Location
                        </a>
                    </p>
                </div>
                <div className="telefone">
                    <TelefoneIcon width={54} height={54} />
                    <p>
                        <a href="tel:+5511945232656">Telefone</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Informations;

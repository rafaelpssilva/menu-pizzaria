import React from "react";
import HamburguerIcon from "../assests/icons/HamburguerIcon";
import PizzaIcon from "../assests/icons/PizzaIcon";
import DrinkIcon from "../assests/icons/DrinkIcon";
import FrenchFriesIcon from "../assests/icons/FrenchFriesIcon";
import VeggiesIcon from "../assests/icons/VeggiesIcon";

function Navbar() {
    const categories = [
        {
            title: "Burger",
            icon: <HamburguerIcon />,
        },
        {
            title: "Pizza",
            icon: <PizzaIcon />,
        },
        {
            title: "Drink",
            icon: <DrinkIcon />,
        },
        {
            title: "French fries",
            icon: <FrenchFriesIcon />,
        },
        {
            title: "Veggies",
            icon: <VeggiesIcon />,
        },
    ];

    return (
        <nav id="navbar" className="wrapper">
            <ul>
                {categories.map(({ icon, title }) => (
                    <li key={title}>
                        {icon}
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;

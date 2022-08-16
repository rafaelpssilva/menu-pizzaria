import React from "react";
import HamburguerIcon from "../assests/icons/HamburguerIcon";
import PizzaIcon from "../assests/icons/PizzaIcon";
import DrinkIcon from "../assests/icons/DrinkIcon";
import FrenchFriesIcon from "../assests/icons/FrenchFriesIcon";
import VeggiesIcon from "../assests/icons/VeggiesIcon";
import { GlobalContext } from "../GlobalContext";

function Navbar() {
    const categories = [
        {
            title: "Pizza",
            icon: <PizzaIcon />,
        },
        {
            title: "Burger",
            icon: <HamburguerIcon />,
        },
        {
            title: "Drink",
            icon: <DrinkIcon />,
        },
        {
            title: "Potato",
            icon: <FrenchFriesIcon />,
        },
        {
            title: "Veggies",
            icon: <VeggiesIcon />,
        },
    ];

    const { selectedFilter, setSelectedFilter } =
        React.useContext(GlobalContext);

    return (
        <nav id="navbar" className="wrapper">
            <ul>
                {categories.map(({ icon, title }) => (
                    <li key={title} onClick={() => setSelectedFilter(title)}>
                        {icon}
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;

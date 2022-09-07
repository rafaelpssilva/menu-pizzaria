import React from "react";
import HamburguerIcon from "../assests/icons/HamburguerIcon";
import PizzaIcon from "../assests/icons/PizzaIcon";
import DrinkIcon from "../assests/icons/DrinkIcon";
import FrenchFriesIcon from "../assests/icons/FrenchFriesIcon";
import VeggiesIcon from "../assests/icons/VeggiesIcon";
import { GlobalContext } from "../GlobalContext";

import Fade from "react-reveal/Fade";
function Navbar() {
    const { selectedFilter, setSelectedFilter } =
        React.useContext(GlobalContext);

    const setColorIcon = (categorie) =>
        selectedFilter === categorie ? true : false;

    const categories = [
        {
            title: "Pizza",
            icon: <PizzaIcon color={setColorIcon("Pizza")} />,
        },
        {
            title: "Burger",
            icon: <HamburguerIcon color={setColorIcon("Burger")} />,
        },
        {
            title: "Drink",
            icon: <DrinkIcon color={setColorIcon("Drink")} />,
        },
        {
            title: "Fries",
            icon: <FrenchFriesIcon color={setColorIcon("Fries")} />,
        },
        {
            title: "Veggies",
            icon: <VeggiesIcon color={setColorIcon("Veggies")} />,
        },
    ];

    return (
        <nav id="navbar" className="wrapper">
            <ul className="filter-group">
                <Fade left>
                    {categories.map(({ icon, title }) => (
                        <li
                            className="navbar-options"
                            key={title}
                            onClick={() => setSelectedFilter(title)}
                        >
                            {icon}
                            <p>{title}</p>
                        </li>
                    ))}
                </Fade>
            </ul>
        </nav>
    );
}

export default Navbar;

import PizzaCapricciosa from "../assests/products/PizzaCapricciosa.png";
import PizzaSicilian from "../assests/products/PizzaSicilian.png";
import PizzaMarinara from "../assests/products/PizzaMarinara.png";
import PizzaPepperoni from "../assests/products/PizzaPepperoni.png";

const products = [
    {
        id: 1,
        category: "pizza",
        title: "Capricciosa",
        price: 20,
        image: PizzaCapricciosa,
    },
    {
        id: 2,
        category: "pizza",
        title: "Sicilian",
        price: 15,
        image: PizzaSicilian,
    },
    {
        id: 3,
        category: "pizza",
        title: "Marinara",
        price: 9.99,
        image: PizzaMarinara,
    },
    {
        id: 4,
        category: "pizza",
        title: "Pepperoni",
        price: 30,
        image: PizzaPepperoni,
    },
];

export default products;

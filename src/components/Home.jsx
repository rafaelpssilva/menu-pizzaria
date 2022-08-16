import React from "react";
import dataProducts from "../data/dataProducts";
import { GlobalContext } from "../GlobalContext";

function Home() {
    const { selectedFilter } = React.useContext(GlobalContext);

    const productsReturn = dataProducts.map(
        ({ id, title, price, image, category }) =>
            selectedFilter === "" ? (
                <div key={id + Math.random()} className="products">
                    <img src={image} alt="title" />
                    <p className="name-product">{title}</p>

                    <p className="price-product">R$ {price}</p>
                </div>
            ) : (
                selectedFilter.toLowerCase() === category && (
                    <div key={id + Math.random()} className="products">
                        <img src={image} alt="title" />
                        <p className="name-product">{title}</p>
                        <p className="price-product">R$ {price}</p>
                    </div>
                )
            )
    );

    // const productsSelected = <div>{dadosProduct && dadosProduct[0].title}</div>;

    return (
        <section id="home" className="wrapper">
            <h3 className="section-selected">
                {selectedFilter ? selectedFilter : "Pizza"}
            </h3>
            <div className="box-products">{productsReturn}</div>
        </section>
    );
}

export default Home;

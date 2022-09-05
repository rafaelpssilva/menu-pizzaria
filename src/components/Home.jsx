import React from "react";
import dataProducts from "../data/dataProducts";
import { GlobalContext } from "../GlobalContext";

function Home() {
    const { selectedFilter } = React.useContext(GlobalContext);

    const productsReturn = dataProducts.map(
        ({ id, title, price, image, category }) =>
            selectedFilter === "" ? (
                <div key={id + Math.random()} className="products">
                    <img src={image} alt="title" className="img-product" />
                    <p className="name-product">{title}</p>

                    <p className="price-product">R$ {price}</p>
                </div>
            ) : (
                selectedFilter.toLowerCase() === category && (
                    <div key={id + Math.random()} className="products">
                        {selectedFilter === "Burger" && <div>p</div>}
                        <img src={image} alt="title" className="img-product" />
                        <p className="name-product">{title}</p>
                        <p className="price-product">R$ {price}</p>
                    </div>
                )
            )
    );

    const message = (
        <>
            <p className="coming-soon">Coming-soon</p>
            <p className="entre-em-contato">
                <a href="https://linkwhats.app/e9ae0d">
                    Entre em contato comigo para ter acesso a este recurso.
                </a>
            </p>
        </>
    );

    return (
        <section id="home" className="wrapper">
            <h3 className="section-selected">
                {selectedFilter ? selectedFilter : "Pizza"}
            </h3>
            <div className="box-products">
                {productsReturn}
                {(selectedFilter === "Burger" && <>{message}</>) ||
                    (selectedFilter === "Drink" && (
                            <p class="coming-soon">Coming soon...</p>
                        ) && <>{message}</>) ||
                    (selectedFilter === "Potato" && <>{message}</>) ||
                    (selectedFilter === "Veggies" && <>{message}</>)}
            </div>
        </section>
    );
}

export default Home;

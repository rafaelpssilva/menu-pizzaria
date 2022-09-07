import React from "react";
import dataProducts from "../data/dataProducts";
import { GlobalContext } from "../GlobalContext";
import Fade from "react-reveal/Fade";

function Home() {
    const { selectedFilter } = React.useContext(GlobalContext);

    const productsReturn = dataProducts.map(
        ({ id, title, price, image, category }) =>
            selectedFilter === "" ? (
                <Fade clear key={id}>
                    <div key={id + Math.random()} className="products">
                        <img src={image} alt="title" className="img-product" />
                        <p className="name-product">{title}</p>
                        <p className="price-product">R$ {price}</p>
                    </div>
                </Fade>
            ) : (
                selectedFilter.toLowerCase() === category && (
                    <Fade clear key={id}>
                        <div key={id + Math.random()} className="products">
                            <img
                                src={image}
                                alt="title"
                                className="img-product"
                            />
                            <p className="name-product">{title}</p>
                            <p className="price-product">R$ {price}</p>
                        </div>
                    </Fade>
                )
            )
    );

    return (
        <section id="home" className="wrapper">
            <h3 className="section-selected">
                {selectedFilter ? selectedFilter : "All"}
            </h3>
            <div className="box-products">{productsReturn}</div>
        </section>
    );
}

export default Home;

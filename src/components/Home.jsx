import React from "react";
import dataProducts from "../data/dataProducts";

function Home() {
    return (
        <section id="home" className="wrapper">
            <h3 className="section-selected">Pizza</h3>
            <div className="box-products">
                {dataProducts.map(({ id, title, price, image }) => (
                    <div key={id + Math.random()} className="products">
                        <img src={image} alt="title" />
                        <p className="name-product">{title}</p>
                        <p className="price-product">R$ {price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Home;
